import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userRequest } from "../api/request";
import { TTokenState } from "../store/type";

interface IUserState {
	_id: string;
	__v: number;
	name: string;
	email: string;
	password: string;
}

export const getUser = createAsyncThunk<
	IUserState,
	void,
	{ rejectValue: string; state: { token: TTokenState } }
>("currentUser/getUser", async (_, { rejectWithValue, getState }) => {
	const token = getState().token.token;
	try {
		return await userRequest(token);
	} catch (error) {
		if (error instanceof Error) {
			return rejectWithValue(error.message);
		}
	}
});

interface IInitialState {
	currentUser: IUserState | string;
}

const initialState: IInitialState = {
	currentUser: "",
};

export const userSlice = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<IUserState>) => {
			state.currentUser = action.payload;
		},
		clearCurrentUser: (state) => {
			state.currentUser = "";
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getUser.fulfilled, (state, action) => {
				state.currentUser = action.payload;
			})
			.addCase(getUser.rejected, (state, action) => {
				console.log(action.payload);
			});
	},
});

export const { setCurrentUser, clearCurrentUser } = userSlice.actions;
export default userSlice.reducer;
