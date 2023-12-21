import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user-slice";
import tokenReducer from "./token-slice";
import listReducer from "./list-slice";

const store = configureStore({
	reducer: {
		user: userReducer,
		token: tokenReducer,
		list: listReducer,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
