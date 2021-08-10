import React, { useEffect } from 'react';
import * as styles from '../styles/pages/history.module.scss';
import BaseLayout from '../layout/BaseLayout';
import * as utils from '../utils';
import { useSelector } from 'react-redux';

const History = () => {

  const transactions = useSelector(state => state.transaction.list);

  const tableHeaders = ['Secret Address', 'Status', 'Transaction', 'Amount', 'Time'];

  return (
    <BaseLayout>
      <div className={styles.historyContainer}>
        <table>
          <thead>
            <tr>
              {tableHeaders.map((header, index) => {
                return <th key={index}>{header}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {transactions && transactions.map((transaction, index) => {
              return (<tr key={index}>
                <td>{transaction.address}</td>
                <td>{transaction.type}</td>
                <td>{transaction.transaction_hash}</td>
                <td>{ parseFloat(transaction.amount)/1000000 }</td>
                <td>{transaction.createdAt}</td>
              </tr>)
            })}
          </tbody>
        </table>
      </div>
    </BaseLayout>        
  );
};

export default History;
