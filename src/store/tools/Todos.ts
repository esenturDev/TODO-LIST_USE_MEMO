import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoListResult } from "../../../types/Interfase";
import axios from "axios";

const url = import.meta.env.VITE_BEKENT_URL;

interface TodosResult {
	_id: number;
	title: string;
	date: string;
	newData?: TodoListResult;
}

export const postTodoAndMoviList = createAsyncThunk(
	"todoAndMovi/postTodoAndMoviList",
	async (newTodo: TodosResult) => {
		try {
			const response = (await axios.post(url, newTodo)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const getTodoAndMoviList = createAsyncThunk(
	"todoAndMovi/getTodoAndMoviList",
	async () => {
		try {
			const response = (await axios.get(url)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

export const deleteTodoAndMoviList = createAsyncThunk(
	"todoAndMovi/deleteTodoAndMoviList",
	async (id: number) => {
		try {
			const response = (await axios.delete(`${url}/${id}`)).data;
			return response;
		} catch (error) {
			console.error(error);
		}
	}
);

// export const postCards = createAsyncThunk(
// 	"todoAndMovi/postCards",
// 	async (newDataToSend: TodosResult[], _id) => {
// 		console.log(_id);

// 		try {
// 			const response = (await axios.put(`${url}/${_id}`, newDataToSend)).data;
// 			return response;
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// );

const initialState: { data: TodosResult[] } = {
	data: [],
};

const TodoListAndMoviLisrSlice = createSlice({
	name: "todoAndMovi",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(
				postTodoAndMoviList.fulfilled,
				(state, action: PayloadAction<TodosResult[]>) => {
					state.data = action.payload;
				}
			)
			.addCase(getTodoAndMoviList.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(deleteTodoAndMoviList.fulfilled, (state, action: PayloadAction<TodosResult[]>) => {
				state.data = action.payload;
			})
			// .addCase(deleteTodoAndMoviList.fulfilled, (state, action: PayloadAction<number>) => {
			// 	state.data = state.data.filter(item => item._id !== action.payload); // Удаляем элемент по ID
			// })
	},
});

export const todolistAndMoviList = TodoListAndMoviLisrSlice.reducer;
