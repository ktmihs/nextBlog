import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CategoryType {
	id: string;
	name: string;
	len: number;
}

interface CategoryStateType {
	categoryList: CategoryType[];
	selectedCategory: string | null;
}

const initialState: CategoryStateType = {
	categoryList: [
		{ id: 'all', name: '전체', len: 20 },
		{ id: 'project', name: 'project', len: 13 },
		{ id: 'study', name: 'study', len: 7 },
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
				len: action.payload.len,
			});
		},
		selectCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload;
		},
	},
});

export const { setCategory, selectCategory } = categorySlice.actions;
export default categorySlice.reducer;
