import React from 'react';
import { Select } from 'antd';
import "antd/dist/antd.css";
import { DataP } from "../DataPicker/DataPicker";
import './HistoryCurrencySelector.css'

const {Option} = Select;

interface IHistoryCurrencyProps {
  currenciesForSelect: Record<string, number>;
  setBaseCurrency: (value: string) => void;
  setDateStart: (value: string) => void;
  setDateEnd: (value: string) => void;
  setHistoryCurrencies: (value: string) => void;
}

const defaultValue = 'EUR';

export const HistoryCurrencySelector: React.FC<IHistoryCurrencyProps> = ({
    currenciesForSelect,
    setBaseCurrency,
    setDateStart,
    setDateEnd,
    setHistoryCurrencies,
}) => (
    <>
        <label>
            <span className="base">Base:</span>
            <CurrencySelect
                defaultValue={defaultValue}
                currenciesForSelect={currenciesForSelect}
                onChange={setBaseCurrency}
            />
        </label>
        <label>
            <span className="base">History of:</span>
            <CurrencySelect
                defaultValue="USD"
                currenciesForSelect={currenciesForSelect}
                onChange={setHistoryCurrencies}
            />
        </label>
        <label>
            <span className="base">Data range:</span>
            <DataP setDateStart={setDateStart} setDateEnd={setDateEnd} />
        </label>
    </>
);

const CurrencySelect: React.FC<IPropsCurrencySelect> = ({
    defaultValue,
    currenciesForSelect,
    onChange,
}) => (
    <Select
        defaultValue={defaultValue}
        onChange={onChange}
    >
        {
            Object
                .keys(currenciesForSelect)
                .map((currencyKey, index) => (
                    <Option
                        key={index}
                        value={currencyKey}
                    >
                        {`${currencyKey} `}
                    </Option>
                ))
        }
    </Select>
)

interface IPropsCurrencySelect {
    defaultValue: string;
    currenciesForSelect: Record<string, number>;
    onChange: (value: string) => void;
}
