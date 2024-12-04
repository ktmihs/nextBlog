import Link from 'next/link';
import styles from '@/common/component/article/articleBox.module.css';
import { articleType } from '@/common/component/article/articleBoxType';

const ArticleBox = ({ article }: { article: articleType }) => {
	return (
		<li key={article.id}>
			<article className={styles.article}>
				<Link href={article.url}>
					<img src={article.thumbnail} alt={article.title} />
					<h3>{article.title}</h3>
					<span>{article.summary}</span>
				</Link>
			</article>
		</li>
	);
};

export default ArticleBox;
