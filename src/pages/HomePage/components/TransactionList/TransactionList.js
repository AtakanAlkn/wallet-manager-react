import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTransaction } from "../../../../redux/features/transactionSlice";
import styles from "./transaction.module.css";

const TransactionList = () => {
  const transactions = useSelector((state) => state.transactions.transactions);
  const dispatch = useDispatch();

  const handleDeleteTransaction = (id, amount, type) => {
    dispatch(deleteTransaction(id));
  };

  return (
    <div className={styles.list}>
      <h2>İşlem Geçmişi</h2>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <div>Başlık: {transaction.title}</div>
            <div>Açıklama: {transaction.description}</div>
            <div>Tutar: {transaction.amount.toFixed(2)}</div>
            <div>Tarih: {transaction.date}</div>
            <div>Tip: {transaction.type}</div>
            <button
              className={styles.deleteButton}
              onClick={() =>
                handleDeleteTransaction(
                  transaction.id,
                  transaction.amount,
                  transaction.type
                )
              }
            >
              Sil
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
