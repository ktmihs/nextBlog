'use client';

import styles from '@components/Article/ArticleDetail.module.css';
import { article } from '@components/Article/Article.mock';

const ArticleDetail = ({ currentId }: { currentId: string }) => {
	// store의 현재 currentId를 통한 articleList API로 가져오기
	const result = 'API 받아온 데이터' as any;

	return (
		<article>
			<h2 className={styles.articleTitle}>{article.title}</h2>
			<section className={styles.articleInfo}>
				<span>{article.author}</span>
				<span>•</span>
				<span>{article.date}</span>
			</section>
			<section>{result}</section>
		</article>
	);
};

export default ArticleDetail;
