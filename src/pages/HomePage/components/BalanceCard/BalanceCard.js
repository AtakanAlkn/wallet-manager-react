import styles from "./balanceCard.module.css";
import { useSelector } from "react-redux";

// Toplam bakiye, gelir ve gider kartları
const BalanceCard = () => {
  const balance = useSelector((state) => state.transactions.balance);
  const income = useSelector((state) => state.transactions.income);
  const expense = useSelector((state) => state.transactions.expense);
  return (
    <div className={styles.horizontalContainer}>
      <div className={styles.balance}>
        <p>Toplam Bakiye</p>
        <p>{balance.toFixed(2)}</p>
      </div>
      <div className={styles.income}>
        <p>Gelir</p>
        <p>{income.toFixed(2)}</p>
      </div>
      <div className={styles.expense}>
        <p>Gider</p>
        <p>{expense.toFixed(2)}</p>
      </div>
    </div>
  );
};
export default BalanceCard;
