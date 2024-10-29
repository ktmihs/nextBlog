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
		{ id: 1, name: '가장 최근 글' },
		{ id: 2, name: '두 번째 최근 글' },
		{ id: 3, name: '세 번째 최근 글' },
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
									<p>
										{category.name} ({categoryLen[category.key]})
									</p>
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
									<p>{currentPost.name}</p>
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
