import React from "react";
import { useSelector } from "react-redux";
import styles from "./expensePage.module.css";
import logo from "../../assets/images/logo.png";
import MySideNav from "../../components/SideNav/MySideNav";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

const ExpensePage = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Giderleri filtrele
  const expenseTransactions = transactions.filter(
    (transaction) => transaction.type === "expense"
  );
  return (
    <div className={styles.container}>
      <MySideNav />
      <div className={styles.innerContainer}>
        {expenseTransactions.length === 0 ? (
          <div className={styles.emptySection}>
            <img src={logo} className={styles.img} />
            <h1 className={styles.header}>Gider geçmişiniz yok</h1>
            <p className={styles.text}>
              Hemen oluşturmak için ana sayfaya dönün
            </p>
          </div>
        ) : (
          <TransactionCard isFilter={false} a="expense" />
        )}
      </div>
    </div>
  );
};

export default ExpensePage;
