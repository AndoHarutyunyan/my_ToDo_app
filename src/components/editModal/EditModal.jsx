import { useState } from "react";
import styles from "./EditModal.module.scss";


export default function EditModal({ closeModal, edit, name }) {
  const [inputValue, setInputValue] = useState(name);
  return (
    <div className="main_bg_modals">
      <div className={styles.wr_EditModal}>
        <div className={[styles.wr_title_close, "flex_between"].join(" ")}>
          <h2>Edit</h2>
          <button
            className={[styles.close, "br_outline_none", "flex_center"].join(
              " "
            )}
            onClick={closeModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
            >
              <path d="M10.05 23.95a1 1 0 0 0 1.414 0L17 18.414l5.536 5.536a1 1 0 0 0 1.414-1.414L18.414 17l5.536-5.536a1 1 0 0 0-1.414-1.414L17 15.586l-5.536-5.536a1 1 0 0 0-1.414 1.414L15.586 17l-5.536 5.536a1 1 0 0 0 0 1.414z" />
            </svg>
          </button>
        </div>
        <div className={styles.wr_input}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="some words"
            className="br_outline_none"
          />
        </div>
        <div className={[styles.wr_btn, "flex_between"].join(" ")}>
          <button className="br_outline_none" onClick={closeModal}>
            CANCEL
          </button>
          <button className="br_outline_none" onClick={()=>edit(inputValue)}>
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}
