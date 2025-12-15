import { api } from '@/utils/api';
import { PostType } from '@/lib/features/post/postSlice';

export const fetchPostById = async (id: string): Promise<PostType> => {
	const { data } = await api.get(`/api/posts/${id}`);
	return data;
};

export const fetchPosts = async (): Promise<PostType[]> => {
	const { data } = await api.get('/api/posts');
	return data;
};

export const createPost = async (post: Partial<PostType>) => {
	return api.post('/api/post', post);
};

export const updatePost = async (post: PostType) => {
	return api.put(`/api/posts/${post.id}`, post);
};

export const deletePost = async (id: string) => {
	return api.delete(`/api/posts/${id}`);
};
