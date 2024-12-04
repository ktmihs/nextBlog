import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from '@app/(main)/(posting)/category/[id]/page.module.css';
import ArticleBox from '@/common/component/article/articleBox';

const CategoryPage: FC<IDPropsType> = ({ params }) => {
	// 스토어에서 가져올 임시 데이터
	const articleList = [
		{
			id: '1001',
			title: 'title',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
			url: `/detail/1001`,
		},
		{
			id: '1002',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
			url: `/detail/1002`,
		},
		{
			id: '1003',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
			url: `/detail/1003`,
		},
	];

	return (
		<>
			<section className={styles.categoryList}>
				<h2 className={styles.categoryName}>category page ({params.id})</h2>
				<ul className={styles.articleList}>
					{articleList.map(article => (
						<ArticleBox article={article} />
					))}
				</ul>
			</section>
		</>
	);
};

export default CategoryPage;
