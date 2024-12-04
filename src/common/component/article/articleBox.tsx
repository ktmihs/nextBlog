import Link from 'next/link';
import styles from '@/common/component/article/articleBox.module.css';
import { articleType } from '@/common/component/article/articleType';

const ArticleBox = ({ article }: { article: articleType }) => {
	return (
		<li key={article.id}>
			<article className={styles.articleItem}>
				<Link href={article.url}>
					<img
						src={article.thumbnail}
						alt={article.title}
						className={styles.thumbnail}
					/>
					<h3 className={styles.title}>{article.title}</h3>
					<span className={styles.summary}>{article.summary}</span>
				</Link>
			</article>
		</li>
	);
};

export default ArticleBox;
