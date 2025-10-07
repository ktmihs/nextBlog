import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryType {
	id: string;
	name: string;
}

export interface CategoryStateType {
	categoryList: CategoryType[];
	selectedCategory: string | null;
	loading: boolean;
	error: string | null;
}

const initialState: CategoryStateType = {
	categoryList: [],
	selectedCategory: null,
	loading: false,
	error: null,
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		addCategory: (state, action: PayloadAction<CategoryType>) => {
			const exists = state.categoryList.some(
				({ id }) => id === action.payload.id,
			);
			if (exists) return;
			state.categoryList.push({
				id: action.payload.id,
				name: action.payload.name,
			});
		},
		selectCategory: (state, action: PayloadAction<string | null>) => {
			state.selectedCategory = action.payload;
		},
		removeSelectedCategory: state => {
			state.categoryList = state.categoryList.filter(
				({ id }) => id !== state.selectedCategory,
			);
			state.selectedCategory = null;
		},
	},
});

export const { addCategory, selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
