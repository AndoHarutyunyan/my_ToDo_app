import styles from "./DeleteModal.module.scss";

export default function DeleteModal({ name, deleteToDo, closeModal }) {
  return (
    <div className="main_bg_modals">
      <div className={styles.wr_DeleteModal}>
        <div className={[styles.wr_title_close, "flex_between"].join(" ")}>
          <h2>Delet</h2>
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
        <h4>Are you sure you want to delete {name} todo</h4>
        <div className={[styles.wr_btn, "flex_between"].join(" ")}>
          <button className="br_outline_none" onClick={closeModal}>
            CANCEL
          </button>
          <button className="br_outline_none" onClick={deleteToDo}>
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}
