import styles from "./Input.module.css";

const Input = ({ title, placeHolder }) => {
  return (
    <>
      <label className={styles.label}>{title}</label>
      <input className={styles.input} placeholder={placeHolder}></input>
    </>
  );
};

export default Input;
