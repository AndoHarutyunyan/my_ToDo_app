import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getToDoList = createAsyncThunk(
  "toDoList/getToDoList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:8080/toDoList");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const createToDo = createAsyncThunk(
  "toDoList/createToDo",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post("http://localhost:8080/toDoList", item);
      dispatch(getToDoList());
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const deleteToDoItem = createAsyncThunk(
  "toDoList/deleteToDoItem",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/toDoList/${id}`
      );
      dispatch(getToDoList());
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
export const editToDoItem = createAsyncThunk(
  "toDoList/editToDoItem",
  async (item, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.patch(
        `http://localhost:8080/toDoList/${item.id}`,
        item
      );
      dispatch(getToDoList());
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const initialState = {
  toDoList: [],
  searchValue: "",
  filterValue: { value: "All", label: "All" },
};
export const toDoSlice = createSlice({
  name: "toDo",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    //getToDoList
    builder.addCase(getToDoList.pending, (state, action) => {});
    builder.addCase(getToDoList.fulfilled, (state, action) => {
      state.toDoList = action.payload;
    });
    builder.addCase(getToDoList.rejected, (state, action) => {});

    //createToDo
    builder.addCase(createToDo.rejected, (state, action) => {
      console.log("something went wrong");
    });

    // deleteToDoItem
    builder.addCase(deleteToDoItem.rejected, (state, action) => {
      console.log("something went wrong");
    });

    // editToDoItem
    builder.addCase(editToDoItem.rejected, (state, action) => {
      console.log("something went wrong");
    });
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
