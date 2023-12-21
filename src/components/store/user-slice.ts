import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userRequest } from "../api/request";
import { TTokenState } from "../store/type";

interface ICurrentUser {
	_id: string;
	__v: number;
	name: string;
	email: string;
	password: string;
}

export const getUser = createAsyncThunk<
	ICurrentUser,
	void,
	{ rejectValue: string; state: { token: TTokenState } }
>("currentUser/getUser", async (_, { rejectWithValue, getState }) => {
	const token = getState().token.token;
	const response = await userRequest(token);
	if (!response.ok) {
		return rejectWithValue(response.statusText);
	}
	return await response.json();
});

interface IUserState {
	currentUser: ICurrentUser | string;
}

const initialState: IUserState = {
	currentUser: "",
};

export const userSlice = createSlice({
	name: "currentUser",
	initialState,
	reducers: {
		setCurrentUser: (state, action: PayloadAction<ICurrentUser>) => {
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
