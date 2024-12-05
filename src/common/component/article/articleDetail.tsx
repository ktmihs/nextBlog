import styles from '@/common/component/Article/ArticleDetail.module.css';
import { article } from '@/common/component/Article/Article.mock';

const ArticleDetail = ({ currentId }: { currentId: string }) => {
	// store의 현재 currentId를 통한 articleList API로 가져오기

	return (
		<article>
			<h2 className={styles.articleTitle}>{article.title}</h2>
			<section className={styles.articleInfo}>
				<span>{article.author}</span>
				<span>•</span>
				<span>{article.date}</span>
			</section>
			<section>{article.content}</section>
		</article>
	);
};

export default ArticleDetail;
