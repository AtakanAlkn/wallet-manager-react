import React, { useState, useEffect } from "react";
import styles from "./transactionCard.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTransaction,
  toggleSortOrder,
  setFilter,
  updateTransaction,
} from "../../redux/features/transactionSlice";
import BasicModal from "../../utils/modal/BasicModal";

const TransactionCard = ({ isFilter = true, a }) => {
  // Gelir gider listeleme filtre
  useEffect(() => {
    if (a) {
      dispatch(setFilter(a));
    } else {
      dispatch(setFilter("all"));
    }
  }, []);
  const dispatch = useDispatch();

  // Redux store'dan işlemleri al
  const transactions = useSelector((state) => state.transactions.transactions);
  const sortByDateAscending = useSelector(
    (state) => state.transactions.sortByDateAscending
  );

  // Filtreleme
  const filter = useSelector((state) => state.transactions.filter);

  // İşlemi sil
  const handleDeleteTransaction = (id) => {
    dispatch(deleteTransaction(id));
  };

  // İşlemi düzenle
  const [editingTransaction, setEditingTransaction] = useState(null);
  const handleEditTransaction = (transaction) => {
    setEditingTransaction(transaction);
  };

  // Kaydet
  const handleSaveEdit = () => {
    if (!editingTransaction) return;

    dispatch(updateTransaction(editingTransaction));

    setEditingTransaction(null);
  };

  // Tarihe göre sıralama toggle
  const handleSortOrderToggle = () => {
    dispatch(toggleSortOrder());
  };

  //Dropdown menu
  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  // Filtreleme
  const filteredTransactions = transactions.filter((transaction) => {
    if (filter === "all") {
      return true;
    } else {
      return transaction.type === filter;
    }
  });

  // Sıralama
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
            {isFilter && (
              <div className={styles.filterDropdown}>
                <select onChange={handleFilterChange} value={filter}>
                  <option value="all">Hepsini göster</option>
                  <option value="income">Gelirleri göster</option>
                  <option value="expense">Giderleri göster</option>
                </select>
              </div>
            )}
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
      {editingTransaction && (
        <BasicModal
          editingTransaction={editingTransaction}
          setEditingTransaction={setEditingTransaction}
          handleSaveEdit={handleSaveEdit}
        />
      )}
    </div>
  );
};

export default TransactionCard;
