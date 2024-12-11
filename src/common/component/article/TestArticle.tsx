import styles from '@/common/component/Article/ArticleRow.module.css';
import { articleType } from '@/common/component/Article/ArticleType';
import { useRouter } from 'next/router';

interface propsType {
	article: articleType;
	currentId: string;
}

export const ArticleBoxTest = ({ article }: { article: articleType }) => {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		router.push(`/detail/${article.id}`);
	};

	return (
		<li>
			<article className={styles.articleItem}>
				<a href={`/detail/${article.id}`} onClick={handleClick}>
					<img
						src={article.thumbnail}
						alt={article.title}
						className={styles.thumbnail}
					/>
					<h3 className={styles.title}>{article.title}</h3>
					<span className={styles.summary}>{article.summary}</span>
				</a>
			</article>
		</li>
	);
};

export const ArticleRowTest = ({ article, currentId }: propsType) => {
	const router = useRouter();

	const handleClick = (e: React.MouseEvent) => {
		e.preventDefault();
		router.push(`/detail/${article.id}`);
	};

	return (
		<li
			className={`${styles.articleItem} ${
				article.id === currentId && styles.currentArticle
			}`}
		>
			<a href={`/detail/${article.id}`} onClick={handleClick}>
				<span>{article.title}</span>
				<span>{article.date}</span>
			</a>
		</li>
	);
};
