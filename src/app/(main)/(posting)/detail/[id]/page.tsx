import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from './page.module.css';
import { articleList } from '@/common/component/article/article.mock';
import { articleType } from '@/common/component/article/articleType';

import ArticleRow from '@/common/component/article/articleRow';

const DetailPage: FC<IDPropsType> = ({ params }) => {
	// id 기반 페이지 렌더링
	const { id } = params;
	// store의 현재 카테고리를 통한 articleList API로 가져오기
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
