import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import styles from "./modal.module.css";

const BasicModal = ({
  editingTransaction,
  setEditingTransaction,
  handleSaveEdit,
}) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false); // Modal'ı kapat
    setEditingTransaction(null); // Düzenleme durumunu sıfırla
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.add}>
          <h2>İşlemi Düzenle</h2>
          <input
            className={styles.input}
            type="text"
            value={editingTransaction.title}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                title: e.target.value,
              })
            }
          />
          <input
            className={styles.input}
            type="text"
            value={editingTransaction.description}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                description: e.target.value,
              })
            }
          />
          <input
            className={styles.input}
            type="number"
            value={editingTransaction.amount}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                amount: parseFloat(e.target.value),
              })
            }
          />
          <select
            className={styles.input}
            value={editingTransaction.type}
            onChange={(e) =>
              setEditingTransaction({
                ...editingTransaction,
                type: e.target.value,
              })
            }
          >
            <option value="income">Gelir</option>
            <option value="expense">Gider</option>
          </select>
          <button
            className={styles.button}
            onClick={() => {
              handleSaveEdit();
              handleClose();
            }}
          >
            Kaydet
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default BasicModal;
