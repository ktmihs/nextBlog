import { articleType } from './articleType';

export const articleList = new Array(10).fill(null).reduce((list, _, idx) => {
	const newArticle: articleType = {
		id: `${1000 + idx}`,
		title: `article${idx + 1}`,
		thumbnail: 'http://test.jpg',
		summary: 'qwertyuiop asdfghjkl zxcvbnm...',
		date: '2024-12-04',
	};
	return [...list, newArticle];
}, []);
