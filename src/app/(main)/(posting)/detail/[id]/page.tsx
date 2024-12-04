import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from './page.module.css';
import { articleType } from '@/common/component/article/articleType';

import ArticleRow from '@/common/component/article/articleRow';

const DetailPage: FC<IDPropsType> = ({ params }) => {
	// id 기반 페이지 렌더링
	const { id } = params;
	// 스토어에서 가져올 임시 데이터
	const articleList = [
		{
			id: '1000',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1001',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1002',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1003',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
	];
	const article = {
		id: '1001',
		title: '오늘의 글 제목',
		author: 'ktmihs',
		date: '2024-11-28',
		content: '글글글글글',
	};
	return (
		<div className={styles.articleContainer}>
			<section>
				<span>현재 카테고리명</span>
				<div>
					<ul className={styles.articleList}>
						{articleList.map((article: articleType) => (
							<ArticleRow article={article} currentId={id} />
						))}
					</ul>
				</div>
			</section>
			<hr />
			<article>
				<h2 className={styles.articleTitle}>{article.title}</h2>
				<section className={styles.articleInfo}>
					<span>{article.author}</span>
					<span>•</span>
					<span>{article.date}</span>
				</section>
				<section>{article.content}</section>
			</article>
		</div>
	);
};

export default DetailPage;
