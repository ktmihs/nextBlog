import { articleDetailType, articleType } from './articleType';

export const articleList = new Array(10).fill(null).reduce((list, _, idx) => {
	const newArticle: articleType = {
		id: `${1000 + idx}`,
		title: `article${idx + 1}`,
		thumbnail: 'http://test.jpg',
		summary: 'qwertyuiop asdfghjkl zxcvbnm...',
		date: '2024-12-04',
		author: 'ktmihs',
	};
	return [...list, newArticle];
}, []);

export const article: articleDetailType = {
	id: '1001',
	title: '오늘의 글 제목',
	author: 'ktmihs',
	date: '2024-11-28',
	content: '글글글글글',
};
