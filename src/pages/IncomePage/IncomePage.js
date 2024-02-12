import React from "react";
import { useSelector } from "react-redux";
import styles from "./incomePage.module.css";
import logo from "../../assets/images/logo.png";
import MySideNav from "../../components/SideNav/MySideNav";
import TransactionCard from "../../components/TransactionCard/TransactionCard";

const IncomePage = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  // Gelirleri filtrele
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.type === "income"
  );

  return (
    <div className={styles.container}>
      <MySideNav />
      <div className={styles.innerContainer}>
        {incomeTransactions.length === 0 ? (
          <div className={styles.emptySection}>
            <img src={logo} className={styles.img} />
            <h1 className={styles.header}>Gelir geçmişiniz yok</h1>
            <p className={styles.text}>
              Hemen oluşturmak için ana sayfaya dönün
            </p>
          </div>
        ) : (
          <TransactionCard isFilter={false} a="income" />
        )}
      </div>
    </div>
  );
};

export default IncomePage;
