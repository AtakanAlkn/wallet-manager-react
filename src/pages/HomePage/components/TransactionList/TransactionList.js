import React from "react";
import TransactionCard from "../../../../components/TransactionCard/TransactionCard";
import styles from "./transactionList.module.css";

const TransactionList = () => {
  return (
    <div className={styles.list}>
      <div>
        <h2>İşlem Geçmişi</h2>
        <TransactionCard />
      </div>
    </div>
  );
};

export default TransactionList;
