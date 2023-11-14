import React from 'react';

const Transaction = ({ transaction, deleteTransaction }) => {
  const {  date, description, category, amount } = transaction;

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <button onClick={() =>deleteTransaction}>Delete</button>
      </td>
    </tr>
  );
}

export default Transaction;