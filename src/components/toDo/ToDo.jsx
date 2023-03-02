import styles from "./ToDo.module.scss";
import AddToDo from "./../addToDo/AddToDo";
import FilterByCategories from "./../filterByCategories/FilterByCategories";
export default function Todo(props) {
  return (
    <div className={styles.wr_ToDo}>
      <h1>To Do App</h1>
      <AddToDo />
      <FilterByCategories/>
      <span className={styles.line}></span>
    </div>
  );
}
