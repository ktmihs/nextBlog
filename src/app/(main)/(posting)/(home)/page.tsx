import type { NextPage } from 'next';
import styles from '@app/(main)/(posting)/(home)/page.module.css';
import ArticleBox from '@/common/component/article/articleBox';
import { articleType } from '@/common/component/article/articleType';
import { articleList } from '@/common/component/article/article.mock';

const Home: NextPage = () => {
	const totalCnt = articleList.length;

	return (
		<section className={styles.page}>
			<h2 className={styles.categoryName}>main page</h2>
			<section className={styles.listInfo}>
				<span>전체 {totalCnt}개의 글</span>
				<div>dropdown</div>
			</section>
			<ul className={styles.articleList}>
				{articleList.map((article: articleType) => {
					return <ArticleBox article={article} />;
				})}
			</ul>
		</section>
	);
};

export default Home;
