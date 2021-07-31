import React from 'react';
import {Table} from 'antd';
import './RateCurrencyHistoryTable.css';
import { IRateHistoryProps } from './types';


export const RateCurrencyHistoryTable = (props: IRateHistoryProps) => {
  console.log(props);

  const columns = [
    {
      title: 'Date',
      dataIndex: 'rate',
    },
    {
      title: 'Rate',
      dataIndex: 'value',
    },
  ];

  const data = Object.keys(props.currencies).map((ratesKey, index) => {

    return (
      {
        key: `${index}`,
        rate: `${ratesKey}`,
        value: `${props.currencies[ratesKey][props.historyCurrencies] ?? '0.00'}`,
      })
  })

  return (
    <div>
      <Table columns={columns} dataSource={data} size="middle"/>
    </div>
  )
}
