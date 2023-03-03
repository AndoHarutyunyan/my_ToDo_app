import styles from "./Filter.module.scss";

export default function Filter(props) {
  return (
    <div className={[styles.wr_FilterByCategories, 'flex_between'].join(' ')}>
      <div>
        <input type="radio" id="all" name="drone" value="all" />
        <label htmlFor="all">ALL</label>
      </div>
      <div>
        <input
          type="radio"
          id="important"
          name="drone"
          value="important"
          defaultChecked
        />
        <label htmlFor="important">Important</label>
      </div>

      <div>
        <input type="radio" id="checked" name="drone" value="checked" />
        <label htmlFor="checked">Checked</label>
      </div>
      <div>
        <input type="radio" id="remember" name="drone" value="remember" />
        <label htmlFor="remember">Remember</label>
      </div>
    </div>
  );
}
