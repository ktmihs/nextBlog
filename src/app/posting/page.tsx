'use client';

import type { NextPage } from 'next';
import { useState } from 'react';
import { createPost } from '@/lib/api/postApi';

const PostingPage: NextPage = () => {
	const [title, setTitle] = useState('');
	const [content, setContent] = useState('');
	const [category, setCategory] = useState('');
	const [thumbnail, setThumbnail] = useState('');
	const [isPublished, setIsPublished] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async () => {
		if (!title || !content || !category) {
			setError('필수 항목을 입력해주세요.');
			return;
		}

		setLoading(true);
		setError(null);

		try {
			await createPost({
				title,
				content,
				category,
				thumbnail: thumbnail || undefined,
				views: 0,
				id: 'user-id', // TODO: post ID
				authorId: 'current-user-id', // TODO: 로그인 사용자
				isPublished,
			});
			alert('게시글이 저장되었습니다.');
		} catch (e) {
			setError('게시글 저장에 실패했습니다.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<main style={{ maxWidth: 720, margin: '0 auto' }}>
			<h1>포스팅 작성</h1>
			<div>
				<label>제목</label>
				<input value={title} onChange={e => setTitle(e.target.value)} />
			</div>
			<div>
				<label>카테고리</label>
				<input value={category} onChange={e => setCategory(e.target.value)} />
			</div>
			<div>
				<label>썸네일 URL</label>
				<input value={thumbnail} onChange={e => setThumbnail(e.target.value)} />
			</div>
			<div>
				<label>내용</label>
				<textarea
					rows={10}
					value={content}
					onChange={e => setContent(e.target.value)}
				/>
			</div>
			<div>
				<label>
					<input
						type="checkbox"
						checked={isPublished}
						onChange={e => setIsPublished(e.target.checked)}
					/>
					공개
				</label>
			</div>
			{error && <p style={{ color: 'red' }}>{error}</p>}
			<button onClick={handleSubmit} disabled={loading}>
				{loading ? '저장 중...' : '저장'}
			</button>
		</main>
	);
};

export default PostingPage;
