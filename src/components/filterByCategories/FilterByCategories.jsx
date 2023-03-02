import styles from "./FilterByCategories.module.scss";

export default function filterByCategories(props) {
  return (
    <div className={styles.wr_FilterByCategories}>
      <div>
        <input type="radio" id="all" name="drone" value="all" />
        <label for="all">ALL</label>
      </div>
      <div>
        <input
          type="radio"
          id="important"
          name="drone"
          value="important"
          checked
        />
        <label for="important">Important</label>
      </div>

      <div>
        <input type="radio" id="checked" name="drone" value="checked" />
        <label for="checked">Checked</label>
      </div>
      <div>
        <input type="radio" id="remember" name="drone" value="remember" />
        <label for="remember">Remember</label>
      </div>
    </div>
  );
}
