import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDoList: [
    { id: "1", name: "Vaxo", checked: false },
    { id: "2", name: "Hendo", checked: true },
    { id: "3", name: "Noro", checked: false },
  ],
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
    changeCheck:(state,actions)=>{
      state.toDoList.forEach(el=>{
        if(el.id===actions.payload){
          el.checked=!el.checked
        }
      })
    }
  },
});

export const { addToDo, deleteToDo, editToDoName, changeCheck } = toDoSlice.actions;
export default toDoSlice.reducer;
