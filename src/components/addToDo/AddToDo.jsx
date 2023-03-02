import styles from "./AddToDo.module.scss";
export default function addToDo(props) {
  return (
    <div className={styles.wr_add_ToDo}>
      <input type="text" placeholder="some words" />
      <button >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.04948 7.59552H13.3224"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.18593 13.5955L7.18593 1.59552"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
