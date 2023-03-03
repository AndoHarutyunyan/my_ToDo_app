import styles from "./ToDoList.module.scss";
import ToDoItem from "./../toDoItem/ToDoItem";
import { useSelector } from "react-redux";

export default function ToDoList(props) {
  const toDoList = useSelector((state) => state.toDoList);
  // console.log(toDoList);
  // const dispatch = useDispatch();
  return (
    <div className={styles.wr_ToDolist}>
      {toDoList.map((el) => (
        <ToDoItem toDoItemData={el} key={el.id} />
      ))}
    </div>
  );
}
