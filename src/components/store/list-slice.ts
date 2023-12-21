import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productsRequest, recipesRequest } from "../api/request";
import { IProductsList, IRecipesList } from "./type";

interface IListState {
	productsList: IProductsList[];
	recipesList: IRecipesList[];
	loading: boolean;
	error: string | null;
}

export const getProductsList = createAsyncThunk<
	IProductsList[],
	undefined,
	{ rejectValue: string }
>("list/getProductsList", async (_, { rejectWithValue }) => {
	const response = await productsRequest();
	if (!response.ok) {
		return rejectWithValue(response.statusText);
	}
	return (await response.json()) as IProductsList[];
});

export const getRecipesList = createAsyncThunk<
	IRecipesList[],
	undefined,
	{ rejectValue: string }
>("list/getList", async (_, { rejectWithValue }) => {
	const response = await recipesRequest();
	if (!response.ok) {
		return rejectWithValue(response.statusText);
	}
	return (await response.json()) as IRecipesList[];
});

const initialState: IListState = {
	productsList: [],
	recipesList: [],
	loading: true,
	error: null,
};

const listSlice = createSlice({
	name: "list",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getProductsList.fulfilled, (state, action) => {
				state.productsList = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getProductsList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
		builder
			.addCase(getRecipesList.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getRecipesList.fulfilled, (state, action) => {
				state.recipesList = action.payload;
				state.loading = false;
				state.error = null;
			})
			.addCase(getRecipesList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
			});
	},
});

export default listSlice.reducer;
