import styles from "./ToDoList.module.scss";
import ToDoItem from "./../toDoItem/ToDoItem";
import Pagination from "./../pagination/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { useMemo, useState } from "react";
import { sortTodoList } from "../../store/slices/toDoSlice";

export default function ToDoList() {
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state.toDoList);
  const searchValue = useSelector((state) => state.searchValue);
  const filterValue = useSelector((stete) => stete.filterValue);

  const [upDown, setUpDown] = useState(false);
  const [itemsCount, setItemsCount] = useState([0, 20]);

  const list = useMemo(() => {
    let filteredList = [...toDoList];

    if (searchValue) {
      filteredList = filteredList.filter((el) =>
        el.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setItemsCount([0, 20]);
    }

    filteredList = filteredList.filter((el) => {
      if (
        filterValue.value === "Important" ||
        filterValue.value === "Checked" ||
        filterValue.value === "Remember"
      ) {
        setItemsCount([0, 20]);
        return el[filterValue.value.toLowerCase()];
      } else {
        return el;
      }
    });
    return filteredList;
  }, [toDoList, searchValue, filterValue]);

  function changeUpDown() {
    dispatch(sortTodoList(!upDown));
    setUpDown((prev) => !prev);
  }

  return (
    <>
      <div className={styles.wr_btn}>
        <button className="br_outline_none flex_center" onClick={changeUpDown}>
          <svg
            className={upDown ? styles.arrow : null}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
          </svg>
        </button>
      </div>
      <div className={styles.wr_toDo_List}>
        {list.length
          ? list
              .slice(itemsCount[0], itemsCount[1])
              .map((el) => <ToDoItem toDoItemData={el} key={el.id} />)
          : "Nothing yet"}
      </div>
      {list.length > 20 ? (
        <Pagination
          itemsPerPage={20}
          items={list}
          changeItemsCount={setItemsCount}
        />
      ) : null}
    </>
  );
}
