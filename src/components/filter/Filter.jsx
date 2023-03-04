import { useDispatch, useSelector } from "react-redux";
import { changeFilterValue } from "../../store/slices/toDoSlice";
import Select from "react-select";

const options = [
  { value: "All", label: "All" },
  { value: "Important", label: "Important" },
  { value: "Checked", label: "Checked" },
  { value: "Remember", label: "Remember" },
];

export default function Filter() {
  const filterValue = useSelector((stete) => stete.filterValue);
  const dispatch = useDispatch();

  return (
    <div>
      <Select
        defaultValue={filterValue}
        onChange={(e) => {
          dispatch(changeFilterValue(e));
          // console.log(filterValue);
        }}
        options={options}
      />
    </div>
  );
}
