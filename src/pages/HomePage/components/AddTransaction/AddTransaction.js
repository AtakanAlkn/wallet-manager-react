import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTransaction } from "../../../../redux/features/transactionSlice";
import styles from "./addTransaction.module.css";

const AddTransaction = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const dispatch = useDispatch();

  const handleAddTransaction = () => {
    if (!title || !amount) {
      alert("Başlık ve Tutar alanları doldurulmalıdır.");
      return;
    }

    dispatch(
      addTransaction({
        id: Math.random().toString(36).substr(2, 9),
        title,
        description,
        amount: parseFloat(amount),
        type,
        date: new Date().toLocaleString(), // Tarih ekleme
      })
    );

    setTitle("");
    setDescription("");
    setAmount("");
    setType("income");
  };

  return (
    <div className={styles.add}>
      <h2>İşlem Ekle</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Başlık"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className={styles.input}
        type="text"
        placeholder="Açıklama"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className={styles.input}
        type="number"
        placeholder="Miktar"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className={styles.input}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Gelir</option>
        <option value="expense">Gider</option>
      </select>
      <button className={styles.input} onClick={handleAddTransaction}>
        Ekle
      </button>
    </div>
  );
};

export default AddTransaction;
