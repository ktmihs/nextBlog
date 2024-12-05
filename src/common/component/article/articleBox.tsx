import Link from 'next/link';
import styles from '@/common/component/Article/ArticleBox.module.css';
import { articleType } from '@/common/component/Article/ArticleType';

const ArticleBox = ({ article }: { article: articleType }) => {
	return (
		<li>
			<article className={styles.articleItem}>
				<Link href={`/detail/${article.id}`}>
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
