import moment from "moment";
import React, {useEffect, useState} from 'react'

import {HistoryCurrencySelector} from "../HistoryCurrencySelector/HistoryCurrencySelector";
import {RateCurrencyHistoryTable} from "../RateCurrencyHistoryTable";
import {ChartContainer} from "../Graphics";
import { IPropsHistory } from './types';

export const History: React.FC<IPropsHistory> = ({
    setCurrencies,
}) => {

  const changeStatus = (responseFromApi: Response) => {
    if (!responseFromApi.ok) {
      throw new Error(responseFromApi.statusText);
    }

    return responseFromApi;
  }
  const newDateStr = moment(new Date())
    .format("YYYY-MM-DD")
    .toString();

  const [currenciesForSelect, setCurrenciesFoSelect] = useState<Record<string, number>>({});
  const [baseCurrency, setBaseCurrency] = useState<string>('EUR');
  const [historyCurrencies, setHistoryCurrencies] = useState<string>('USD');
  const [dateStart, setDateStart] = useState<string>(newDateStr);
  const [dateEnd, setDateEnd] = useState<string>(newDateStr);

  const host = 'api.frankfurter.app';
  useEffect(() => {
    fetch(`https://${host}/latest?from=${baseCurrency}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrenciesFoSelect(json.rates)
      })
      .catch(error => {

        return Promise.reject()
      })
  }, [baseCurrency, historyCurrencies]);

  useEffect(() => {
    if (!dateStart || !dateEnd) {
      setCurrencies({});
      return;
    }
    let newStartDate = dateStart;
    if (newStartDate === dateEnd) {
      newStartDate = moment(Date.parse(dateStart))
        .subtract(3, 'days')
        .format("YYYY-MM-DD")
        .toString();
    }
    fetch(`https://${host}/${newStartDate}..${dateEnd}?from=${baseCurrency}&to=${historyCurrencies}`)
      .then(changeStatus)
      .then(response => response.json())
      .then(json => {
        setCurrencies(json.rates)
      })
      .catch(error => {
        return Promise.reject();
      });
  }, [baseCurrency, dateStart, dateEnd, historyCurrencies]);

  return (
    <>
      <HistoryCurrencySelector
        currenciesForSelect={currenciesForSelect}
        setBaseCurrency={setBaseCurrency}
        setDateStart={setDateStart}
        setDateEnd={setDateEnd}
        setHistoryCurrencies={setHistoryCurrencies}
      />
      <RateCurrencyHistoryTable
        historyCurrencies={historyCurrencies}
      />
      <ChartContainer
          historyCurrencies={historyCurrencies}
      />
    </>

  )
}
