import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CategoryType {
	id: string;
	name: string;
}

export interface CategoryStateType {
	categoryList: CategoryType[];
	selectedCategory: string | null;
}

const initialState: CategoryStateType = {
	categoryList: [
		{ id: 'all', name: '전체' },
		{ id: 'project', name: 'project' },
		{ id: 'study', name: 'study' },
	],
	selectedCategory: null,
};

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		setCategory: (state, action: PayloadAction<CategoryType>) => {
			state.categoryList.push({
				id: action.payload.id,
				name: action.payload.name,
			});
		},
		selectCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { setCategory, selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
