import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from '@app/(main)/(posting)/category/[id]/page.module.css';
import ArticleBox from '@/common/component/article/articleBox';
import { articleList } from '@/common/component/article/article.mock';
import { articleType } from '@/common/component/article/articleType';

const CategoryPage: FC<IDPropsType> = ({ params }) => {
	return (
		<>
			<section className={styles.categoryList}>
				<h2 className={styles.categoryName}>category page ({params.id})</h2>
				<ul className={styles.articleList}>
					{articleList.map((article: articleType) => (
						<ArticleBox article={article} />
					))}
				</ul>
			</section>
		</>
	);
};

export default CategoryPage;
