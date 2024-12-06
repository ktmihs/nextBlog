import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from '@app/(main)/(posting)/category/[id]/page.module.css';
import ArticleBox from '@/common/component/Article/ArticleBox';
import { articleList } from '@/common/component/Article/Article.mock';
import { articleType } from '@/common/component/Article/ArticleType';
import ArticleListControls from '@/common/component/Article/ArticleListControls';

const CategoryPage: FC<IDPropsType> = ({ params }) => {
	return (
		<>
			<section className={styles.categoryList}>
				<h2 className={styles.categoryName}>category page ({params.id})</h2>
				<ArticleListControls />
				<ul className={styles.articleList}>
					{articleList.map((article: articleType) => (
						<ArticleBox article={article} key={article.id} />
					))}
				</ul>
			</section>
		</>
	);
};

export default CategoryPage;
