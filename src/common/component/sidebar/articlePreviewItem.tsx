import Link from 'next/link';
import { articleType } from '@/common/component/article/articleType';
import styles from '@/common/component/sidebar/articlePreviewItem.module.css';

const PreviewArticleItem = ({ article }: { article: articleType }) => {
	return (
		<Link href={`/detail/${article.id}`}>
			<section className={styles.summarySection}>
				<p>{article.title}</p>
				<img src={article.thumbnail} alt={article.title} />
			</section>
		</Link>
	);
};

export default PreviewArticleItem;
