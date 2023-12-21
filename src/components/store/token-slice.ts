import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTokenState } from "./type";

const initialState: TTokenState = {
	token: "",
};

export const tokenSlice = createSlice({
	name: "userToken",
	initialState,
	reducers: {
		setToken: (state, action: PayloadAction<string>) => {
			state.token = action.payload;
			localStorage.setItem("_rrs_token", action.payload);
		},
		clearToken: (state) => {
			state.token = "";
		},
	},
});

export const { setToken, clearToken } = tokenSlice.actions;
export default tokenSlice.reducer;
