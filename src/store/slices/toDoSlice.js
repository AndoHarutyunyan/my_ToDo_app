import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: JSON.parse(localStorage.getItem("todoList")) ?? [],
  searchValue: "",
  filterValue: { value: "All", label: "All" },
};
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, actions) => {
      state.toDoList = [...state.toDoList, actions.payload];
      localStorage.setItem("todoList", JSON.stringify(state.toDoList));
    },
    deleteToDo: (state, actions) => {
      state.toDoList = state.toDoList.filter((el) => el.id !== actions.payload);
    },
    editToDoName: (state, actions) => {
      state.toDoList.forEach((el) => {
        if (el.id === actions.payload.id) {
          el.name = actions.payload.name;
        }
      });
    },
    changeCheck: (state, actions) => {
      state.toDoList.forEach((el) => {
        if (el.id === actions.payload) {
          el.checked = !el.checked;
        }
      });
    },

    changeSearchValue: (stete, actions) => {
      stete.searchValue = actions.payload;
    },
    changeFilterValue: (state, actions) => {
      state.filterValue = actions.payload;
    },
    sortTodoList: (state, action) => {
      state.toDoList.sort((a, b) => {
        if (action.payload)
          return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1;
        else return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;
      });
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  editToDoName,
  changeCheck,
  changeSearchValue,
  changeFilterValue,
  sortTodoList,
} = toDoSlice.actions;
export default toDoSlice.reducer;
