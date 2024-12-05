import Link from 'next/link';
import { articleType } from '@/common/component/Article/ArticleType';
import styles from '@/common/component/Article/ArticleRow.module.css';

interface propsType {
	article: articleType;
	currentId: string;
}

const ArticleRow = ({ article, currentId }: propsType) => {
	return (
		<li
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
