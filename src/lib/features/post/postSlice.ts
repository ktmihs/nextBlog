// postSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostType {
	id: string;
	title: string;
	content: string;
	thumbnail?: string;
	category: string;
	views: Number;
	authorId: string;
	isPublished: Boolean;
	createdAt: string;
	updatedAt: string;
}
export interface PostStateType {
	postList: PostType[];
	selectedPost: string | null;
	loading: boolean;
	error: string | null;
}

interface selectedPostIdType {
	selectedPostId: string | null;
}

const initialState: selectedPostIdType = {
	selectedPostId: null,
};

const postSlice = createSlice({
	name: 'post',
	initialState,
	reducers: {
		selectPost: (state, action: PayloadAction<string | null>) => {
			state.selectedPostId = action.payload;
		},
	},
});

export const { selectPost } = postSlice.actions;
export default postSlice.reducer;
