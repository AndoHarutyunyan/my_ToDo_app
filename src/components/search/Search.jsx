import { useDispatch, useSelector } from "react-redux";
import { changeSearchValue } from "../../store/slices/toDoSlice";
import styles from "./Search.module.scss";

const Search = () => {
  const searchValue = useSelector((state) => state.searchValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.wr_search}>
      <input
        type="text"
        placeholder="search todo"
        className="br_outline_none"
        value={searchValue}
        onChange={(e) => {
          dispatch(changeSearchValue(e.target.value));
        }}
      />
    </div>
  );
};

export default Search;
