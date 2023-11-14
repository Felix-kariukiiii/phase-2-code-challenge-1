import React, { useState } from 'react';
import TransactionList from './TransactionList';
import NewTransactionForm from './NewTransactionForm';
import CategoryFilter from './CategoryFilter';
import { transactions } from './data'; 

const App = () => {
  const [allTransactions, setAllTransactions] = useState(transactions);
  const [filteredTransactions, setFilteredTransactions] = useState(allTransactions);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === 'All') {
      setFilteredTransactions(allTransactions);
    } else {
      const filtered = allTransactions.filter(
        (transaction) => transaction.category === selectedCategory
      );
      setFilteredTransactions(filtered);
    }
  };

  const addNewTransaction = (newTransaction) => {
    const updatedTransactions = [newTransaction, ...allTransactions];
    setAllTransactions(updatedTransactions);
    setFilteredTransactions(updatedTransactions);
  };