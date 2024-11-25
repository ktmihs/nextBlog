import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from './page.module.css';
import Link from 'next/link';

const DetailPage: FC<IDPropsType> = ({ params }) => {
	// id 기반 페이지 렌더링
	const { id } = params;
	// 스토어에서 가져올 임시 데이터
	const articleList = [
		{
			id: '1000',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1001',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1002',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
		{
			id: '1003',
			title: 'title',
			date: '2024-11-21',
			thumbnail: '/',
			summary:
				'어떤 글이냐면 나도 모르겠는데 일단 그냥 고고~ 어떤 글이냐면 나도 모르겠는데 일단 그냥 고고',
		},
	];
	return (
		<div>
			<section className={styles.currentCategoryList}>
				<div className={styles.currentCategoryList}>현재 카테고리명</div>
				<div>
					<ul className={styles.postList}>
						{articleList.map(article => (
							<li
								key={article.id}
								className={`${styles.postItem} ${
									article.id === id && styles.currentPost
								}`}
							>
								<Link href={`/detail/${article.id}`}>
									<span>{article.title}</span>
									<span>{article.date}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section>detail page ({params.id})</section>
		</div>
	);
};

export default DetailPage;
