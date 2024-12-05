import type { NextPage } from 'next';
import styles from '@app/(main)/(posting)/(home)/page.module.css';
import ArticleBox from '@/common/component/Article/ArticleBox';
import { articleType } from '@/common/component/Article/ArticleType';
import { articleList } from '@/common/component/Article/Article.mock';
import ArticleListControls from '@/common/component/ArticleListControls/ArticleListControls';

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
