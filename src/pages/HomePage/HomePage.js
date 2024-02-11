import React from "react";
import styles from "./HomePage.module.css";
import MySideNav from "../../components/SideNav/MySideNav";
import TransactionList from "./components/TransactionList/TransactionList";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import AddTransaction from "./components/AddTransaction/AddTransaction";
const HomePage = () => {
  return (
    <div className={styles.container}>
      <MySideNav />
      <div className={styles.innerContainer}>
        <div className={styles.topContainer}>
          <h2>Merhaba John</h2>
          <h3>Wallet Manager uygulamasına hoş geldin</h3>
        </div>
        <div className={styles.horizontalContainer}>
          <BalanceCard />
        </div>
        <div className={styles.bottomContainer}>
          <AddTransaction />
          <TransactionList />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
