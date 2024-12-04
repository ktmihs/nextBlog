import styles from './page.module.css';
import Link from 'next/link';
import { articleType } from '@/common/component/article/articleType';

interface propsType {
	article: articleType;
	currentId: string;
}

const ArticleRow = ({ article, currentId }: propsType) => {
	return (
		<li
			key={article.id}
			className={`${styles.articleItem} ${
				article.id === currentId && styles.currentArticle
			}`}
		>
			<Link href={`/detail/${article.id}`}>
				<span>{article.title}</span>
				<span>{article.date}</span>
			</Link>
		</li>
	);
};

export default ArticleRow;
