import styles from "./ToDo.module.scss";
import AddToDo from "./../addToDo/AddToDo";
import Filter from "../filter/Filter";
import ToDoList from './../toDoList/ToDoList'

export default function Todo(props) {
  return (
    <div className={styles.wr_ToDo}>
      <h1>To Do App</h1>
      <AddToDo />
      <Filter/>
      <span className={styles.line}></span>
      <ToDoList />
    </div>
  );
}
