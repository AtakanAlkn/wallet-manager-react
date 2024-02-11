import React from "react";
import { useSelector } from "react-redux";
import MySideNav from "../../components/SideNav/MySideNav";
import styles from "./transactionPage.module.css";
import TransactionCard from "../../components/TransactionCard/TransactionCard";
import logo from "../../assets/images/logo.png";

const TransactionPage = () => {
  const transactions = useSelector((state) => state.transactions.transactions);

  return (
    <div className={styles.container}>
      <MySideNav />
      <div className={styles.innerContainer}>
        {transactions.length === 0 ? (
          <div className={styles.emptySection}>
            <img src={logo} className={styles.img} />
            <h1 className={styles.header}>İşlem geçmişiniz yok</h1>
            <p className={styles.text}>
              Hemen oluşturmak için ana sayfaya dönün
            </p>
          </div>
        ) : (
          <TransactionCard />
        )}
      </div>
    </div>
  );
};

export default TransactionPage;
