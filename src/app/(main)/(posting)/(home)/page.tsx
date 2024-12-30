import type { NextPage } from 'next';
import styles from '@app/(main)/(posting)/(home)/page.module.css';
import ArticleBox from '@components/Article/ArticleBox';
import { articleType } from '@components/Article/ArticleType';
import { articleList } from '@components/Article/Article.mock';
import ArticleListControls from '@components/Article/ArticleListControls';

const Home: NextPage = () => {
	return (
		<section className={styles.page}>
			<h2 className={styles.categoryName}>main page</h2>
			<ArticleListControls />
			<ul className={styles.articleList}>
				{articleList.map((article: articleType) => {
					return <ArticleBox article={article} key={article.id} />;
				})}
			</ul>
		</section>
	);
};

export default Home;
