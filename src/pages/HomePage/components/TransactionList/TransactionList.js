import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  toggleSortOrder,
  setFilter,
} from "../../../../redux/features/transactionSlice";
import styles from "./transaction.module.css";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const sortByDateAscending = useSelector(
    (state) => state.transactions.sortByDateAscending
  );

  const dispatch = useDispatch();

  const filter = useSelector((state) => state.transactions.filter);

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  const handleSortOrderToggle = () => {
    dispatch(toggleSortOrder());
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); // Filtre değerini güncelle
  };
  //Filtreleme
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") {
      return true; // Tüm liste
    } else {
      return transaction.type === filter;
    }
  });
  //Tarih sıralama
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    return sortByDateAscending
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  return (
    <div className={styles.list}>
      <div>
        <h2>İşlem Geçmişi</h2>
        <div className={styles.sortButtons}>
          <div className={styles.sortButton}>
            <button onClick={handleSortOrderToggle}>Tarihe göre sırala</button>
          </div>
          <div className={styles.filterDropdown}>
            <select onChange={handleFilterChange} value={filter}>
              <option value="all">Hepsini göster</option>
              <option value="income">Gelirleri göster</option>
              <option value="expense">Giderleri göster</option>
            </select>
          </div>
        </div>
      </div>
      <div className={styles.cardsContainer}>
        {sortedTransactions.map((transaction) => (
          <div
            key={transaction.id}
            className={`${styles.card} ${
              transaction.type === "income"
                ? styles.incomeCard
                : styles.expenseCard
            }`}
          >
            <div className={styles.cardHeader}>
              <h3>{transaction.title}</h3>
              <button
                className={styles.deleteButton}
                onClick={() => handleDeleteTransaction(transaction.id)}
              >
                Sil
              </button>
            </div>
            <div className={styles.cardBody}>
              <p className={styles.text}>Açıklama: {transaction.description}</p>
              <p className={styles.text}>
                Tutar: {transaction.amount.toFixed(2)}
              </p>
              <p className={styles.text}>Tarih: {transaction.date}</p>
              <p className={styles.text}>
                Tip: {transaction.type === "income" ? "Gelir" : "Gider"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
