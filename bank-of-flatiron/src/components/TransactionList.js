import React, { useState } from 'react';
import Transaction from './Transaction';

const TransactionList = ({ transactions, deleteTransaction }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2>Transactions</h2>
      <input
        type="text"
        placeholder="Search transactions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
