import styles from "./ToDo.module.scss";
import AddToDo from "./../addToDo/AddToDo";
import Filter from "../filter/Filter";
import ToDoList from "./../toDoList/ToDoList";
import Search from "../search/Search";

export default function Todo(props) {
  return (
    <div className={styles.wr_ToDo}>
      <h1>To Do App</h1>
      <AddToDo />
      <span className={styles.line}></span>
      <Search />
      <Filter />
      <span className={styles.line}></span>
      <ToDoList />
    </div>
  );
}
