import React from 'react';
import style from '@app/(main)/(posting)/layout.module.css';
import Link from 'next/link';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const categoryList = [
		{ id: 1, key: 'all', name: '전체' },
		{ id: 2, key: 'project', name: 'project' },
		{ id: 3, key: 'study', name: 'study' },
	];

	interface categoryLenType {
		[key: string]: number;
	}

	const categoryLen: categoryLenType = {
		all: 20,
		project: 13,
		study: 7,
	};

	const currentPostList = [
		{ id: 1, name: '가장 최근 글', thumbnail: '/public/img/test.jpg' },
		{ id: 2, name: '두 번째 최근 글', thumbnail: '/public/img/test.jpg' },
		{ id: 3, name: '세 번째 최근 글', thumbnail: '/public/img/test.jpg' },
	];

	const popularPostList = [
		{ id: 1, name: '가장 인기 글', thumbnail: '/public/img/test.jpg' },
		{ id: 2, name: '두 번째 인기 글', thumbnail: '/public/img/test.jpg' },
		{ id: 3, name: '세 번째 인기 글', thumbnail: '/public/img/test.jpg' },
	];

	return (
		<>
			<section className={style.sidebar}>
				<section className={style.classify}>
					<b>분류</b>
					<div>
						{categoryList.map(category => {
							return (
								<Link href={`/category/${category.id}`} key={category.id}>
									<section>
										<p>
											{category.name} ({categoryLen[category.key]})
										</p>
									</section>
								</Link>
							);
						})}
					</div>
				</section>
				<section className={style.classify}>
					<b>최근글</b>
					<div>
						{currentPostList.map(currentPost => {
							return (
								<Link href={`/detail/${currentPost.id}`} key={currentPost.id}>
									<section className={style.summarySection}>
										<p>{currentPost.name}</p>
										<img src={currentPost.thumbnail} alt={currentPost.name} />
									</section>
								</Link>
							);
						})}
					</div>
				</section>
				<section className={style.classify}>
					<b>인기글</b>
					<div>
						{popularPostList.map(popularPost => {
							return (
								<Link href={`/detail/${popularPost.id}`} key={popularPost.id}>
									<section className={style.summarySection}>
										<p>{popularPost.name}</p>
										<img src={popularPost.thumbnail} alt={popularPost.name} />
									</section>
								</Link>
							);
						})}
					</div>
				</section>
			</section>
			<section className={style.mainContent}>{children}</section>
		</>
	);
}
