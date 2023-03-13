import styles from "./AddToDo.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { createToDo } from "../../store/slices/toDoSlice";

export default function AddToDo() {
  const [inputValue, setInputValue] = useState("");
  const [important, setImportant] = useState(false);
  const dispatch = useDispatch();

  function addToDoList() {
    if (inputValue) {
      const todoItem = {
        id: uuidv4(),
        name: inputValue,
        checked: false,
        important,
        remember: false,
      };
      dispatch(createToDo(todoItem));
      setInputValue("");
      setImportant(false);
    }
  }

  function handleEnterKeyPress(e) {
    if (e.key === "Enter") {
      addToDoList();
    }
  }

  return (
    <>
      <div className={[styles.wr_add_ToDo, "flex_center"].join(" ")}>
        <input
          className="br_outline_none"
          type="text"
          placeholder="some words"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
          }}
          onKeyDown={handleEnterKeyPress}
        />
        <button className="flex_center br_outline_none" onClick={addToDoList}>
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

      <div className={styles.wr_r_btn}>
        <div className="flex_center">
          <input
            type="radio"
            id="default"
            value="default"
            checked={!important}
            onChange={() => {
              setImportant(false);
            }}
          />
          <label htmlFor="default">Default</label>
        </div>
        <div className="flex_center">
          <input
            type="radio"
            id="important"
            value="important"
            checked={important}
            onChange={() => {
              setImportant(true);
            }}
          />
          <label htmlFor="important">Important</label>
        </div>
      </div>
    </>
  );
}
