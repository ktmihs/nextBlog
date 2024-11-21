import { FC } from 'react';
import Link from 'next/link';
import { IDPropsType } from '@/common/type';
import styles from './page.module.css';

const CategoryPage: FC<IDPropsType> = ({ params }) => {
	// 스토어에서 가져올 임시 데이터
	const articleList = [
		{
			id: '1001',
			title: 'title',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1002',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1003',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary: '어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
	];

	return (
		<>
			<section className={styles.categoryList}>
				<h2 className={styles.categoryName}>category page ({params.id})</h2>
				<ul className={styles.articleList}>
					{articleList.map(article => (
						<li key={article.id} className={styles.articleItem}>
							<article>
								<Link href={`/detail/${article.id}`}>
									<img src={article.thumbnail} className={styles.thumbnail} />
									<h3 className={styles.title}>{article.title}</h3>
									<span className={styles.summary}>{article.summary}</span>
								</Link>
							</article>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default CategoryPage;
