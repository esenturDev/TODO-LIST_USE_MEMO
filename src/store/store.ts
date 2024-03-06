import { configureStore } from "@reduxjs/toolkit";
import { todolistAndMoviList } from "./tools/Todos";
import {TypedUseSelectorHook, useSelector} from 'react-redux';
export const store = configureStore({
	reducer: {
		todolistAndMoviList,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type useDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
