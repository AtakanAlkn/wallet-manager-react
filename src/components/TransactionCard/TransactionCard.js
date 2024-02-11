import React, { useState } from "react";
import styles from "./transactionCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  toggleSortOrder,
  setFilter,
  updateTransaction,
} from "../../redux/features/transactionSlice";
import BasicModal from "../../utils/modal/BasicModal";

const TransactionCard = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const sortByDateAscending = useSelector(
    (state) => state.transactions.sortByDateAscending
  );

  const dispatch = useDispatch();

  const filter = useSelector((state) => state.transactions.filter);

  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  /* Düzenleme */
  const [editingTransaction, setEditingTransaction] = useState(null);
  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
  };
  const handleSaveEdit = () => {
    if (!editingTransaction) return;

    dispatch(updateTransaction(editingTransaction));

    setEditingTransaction(null);
  };

  const handleSortOrderToggle = () => {
    dispatch(toggleSortOrder());
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value)); // Filtre değerini güncelle
  };

  // Filtreleme
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") {
      return true; // Tüm liste
    } else {
      return transaction.type === filter;
    }
  });

  // Tarih sıralama
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    return sortByDateAscending
      ? new Date(a.date) - new Date(b.date)
      : new Date(b.date) - new Date(a.date);
  });

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <div className={styles.sortButtons}>
            <div className={styles.sortButton}>
              <button onClick={handleSortOrderToggle}>
                Tarihe göre sırala
              </button>
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
                <div className={styles.buttonClass}>
                  <button
                    className={styles.editButton}
                    onClick={() => handleEditTransaction(transaction)}
                  >
                    Düzenle
                  </button>
                  <button
                    className={styles.deleteButton}
                    onClick={() => handleDeleteTransaction(transaction.id)}
                  >
                    Sil
                  </button>
                </div>
              </div>
              <div className={styles.cardBody}>
                <p className={styles.text}>
                  Açıklama: {transaction.description}
                </p>
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
      {/* Düzenleme modalı */}
      {editingTransaction && (
        <div className={styles.modal}>
          <h2>İşlemi Düzenle</h2>
          <input
            type="text"
            value={editingTransaction.title}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                title: e.target.value,
              })
            }
          />
          <input
            type="text"
            value={editingTransaction.description}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                description: e.target.value,
              })
            }
          />
          <input
            type="number"
            value={editingTransaction.amount}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                amount: parseFloat(e.target.value),
              })
            }
          />
          <select
            value={editingTransaction.type}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                type: e.target.value,
              })
            }
          >
            <option value="income">Gelir</option>
            <option value="expense">Gider</option>
          </select>
          <button onClick={handleSaveEdit}>Kaydet</button>
        </div>
      )}
    </div>
  );
};

export default TransactionCard;
