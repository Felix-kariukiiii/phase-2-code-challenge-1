import React, { useState } from 'react';

const NewTransactionForm = ({ addTransaction }) => {
  const [newTransaction, setNewTransaction] = useState({
    date: '',
    description: '',
    category: '',
    amount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransaction({ ...newTransaction, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction(newTransaction);
    setNewTransaction({
      date: '',
      description: '',
      category: '',
      amount: 0,
    });
  };

  return (
    <div>
      <h2>Add New Transaction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="text" name="date" value={newTransaction.date} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={newTransaction.description} onChange={handleChange} />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={newTransaction.category} onChange={handleChange} />
        </label>
        <label>
          Amount:
          <input type="number" name="amount" value={newTransaction.amount} onChange={handleChange} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default NewTransactionForm;
