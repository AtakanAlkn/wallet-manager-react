import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  income: 0,
  expense: 0,
  sortByDateAscending: true,
  filter: "all",
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
    updateTransaction: (state, action) => {
      const { id, title, description, amount, type, date } = action.payload;
      const index = state.transactions.findIndex(
        (transaction) => transaction.id === id
      );
      if (index !== -1) {
        const oldTransaction = state.transactions[index];
        state.transactions[index] = {
          id,
          title,
          description,
          amount,
          type,
          date,
        };
        if (oldTransaction.type === "income") {
          state.income -= oldTransaction.amount;
          state.balance -= oldTransaction.amount;
        } else {
          state.expense -= oldTransaction.amount;
          state.balance += oldTransaction.amount;
        }
        if (type === "income") {
          state.income += amount;
          state.balance += amount;
        } else {
          state.expense += amount;
          state.balance -= amount;
        }
      }
    },
  },
});

export const {
  addTransaction,
  deleteTransaction,
  toggleSortOrder,
  setFilter,
  updateTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
