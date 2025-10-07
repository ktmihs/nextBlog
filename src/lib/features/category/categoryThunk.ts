import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/utils/api';

// Action Type Prefix: [slice]/[action][target]
// 카테고리 목록 조회
export const getCategories = createAsyncThunk('category/getList', async () => {
	const response = await api.get('/api/category');
	return response;
});

// 카테고리 조회
export const getCategory = createAsyncThunk('category/getItem', async id => {
	const response = await api.get(`/api/category/${id}`);
	return response;
});

// 카테고리 추가
export const setCategory = createAsyncThunk('category/setItem', async data => {
	const response = await api.post('/api/category', data);
	return response;
});

// 카테고리 수정
export const updateCategory = createAsyncThunk(
	'category/updateItem',
	async (id, data) => {
		const response = await api.put(`/api/category/${id}`, data);
		return response;
	},
);

// 카테고리 삭제
export const deleteCategory = createAsyncThunk(
	'category/deleteItem',
	async id => {
		const response = await api.delete(`/api/category/${id}`);
		return response;
	},
);
