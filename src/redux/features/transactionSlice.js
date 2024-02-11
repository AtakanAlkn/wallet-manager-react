// transactionSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
  sortByDateAscending: true,
  filter: "all", // Filtre değeri başlangıçta "all" olarak ayarlanır
};

export const transactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { id, title, description, amount, type, date } = action.payload;
      state.transactions.push({ id, title, description, amount, type, date });
      if (type === "income") {
        state.income += amount;
        state.balance += amount;
      } else {
        state.expense += amount;
        state.balance -= amount;
      }
    },
    deleteTransaction: (state, action) => {
      const id = action.payload;
      const deletedTransaction = state.transactions.find(
        (transaction) => transaction.id === id
      );
      const index = state.transactions.indexOf(deletedTransaction);
      state.transactions.splice(index, 1);
      if (deletedTransaction.type === "income") {
        state.income -= deletedTransaction.amount;
        state.balance -= deletedTransaction.amount;
      } else {
        state.expense -= deletedTransaction.amount;
        state.balance += deletedTransaction.amount;
      }
    },
    toggleSortOrder: (state) => {
      state.sortByDateAscending = !state.sortByDateAscending;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTransaction, deleteTransaction, toggleSortOrder, setFilter } =
  transactionSlice.actions;

export default transactionSlice.reducer;
