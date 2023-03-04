import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [
    {
      id: "1",
      name: "Vaxo",
      checked: false,
      important: false,
      remember: false,
    },
    { id: "2", name: "Hendo", checked: true, important: true, remember: false },
    { id: "5", name: "asd", checked: false, important: false, remember: false },
    { id: "3", name: "Noro", checked: false, important: true, remember: false },
    { id: "6", name: "Noro", checked: false, important: true, remember: false },
    { id: "7", name: "Noro", checked: false, important: true, remember: false },
    { id: "8", name: "Noro", checked: false, important: true, remember: false },
    { id: "9", name: "Noro", checked: false, important: true, remember: false },
    {
      id: "10",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "11",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "12",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "13",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "14",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "15",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "16",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "17",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "18",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "20",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "21",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "22",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "23",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "24",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "25",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "19",
      name: "Noro",
      checked: false,
      important: true,
      remember: false,
    },
    {
      id: "4",
      name: "Apero",
      checked: true,
      important: false,
      remember: false,
    },
  ],
  searchValue: "",
  filterValue: { value: "All", label: "All" },
};
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, actions) => {
      state.toDoList = [...state.toDoList, actions.payload];
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
  },
});

export const {
  addToDo,
  deleteToDo,
  editToDoName,
  changeCheck,
  changeSearchValue,
  changeFilterValue,
} = toDoSlice.actions;
export default toDoSlice.reducer;
