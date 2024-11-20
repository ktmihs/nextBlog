'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import Link from 'next/link';
import style from '@app/(main)/(posting)/layout.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '@lib/store';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	interface categoryLenType {
		[key: string]: number;
	}

	const categoryLen: categoryLenType = {
		all: 20,
		project: 13,
		study: 7,
	};

	const currentPostList = [
		{ id: '1', name: '가장 최근 글', thumbnail: '/public/img/test.jpg' },
		{ id: '2', name: '두 번째 최근 글', thumbnail: '/public/img/test.jpg' },
		{ id: '3', name: '세 번째 최근 글', thumbnail: '/public/img/test.jpg' },
	];

	const popularPostList = [
		{ id: '1', name: '가장 인기 글', thumbnail: '/public/img/test.jpg' },
		{ id: '2', name: '두 번째 인기 글', thumbnail: '/public/img/test.jpg' },
		{ id: '3', name: '세 번째 인기 글', thumbnail: '/public/img/test.jpg' },
	];

	const categoryList = useSelector(
		(state: RootState) => state.category.categoryList,
	);
	const [windowWidth, setWindowWidth] = useState<number>(0);
	const [currentTab, setCurrentTab] = useState<string>('classifyPost');

	useEffect(() => {
		const handleResize = () => setWindowWidth(window.innerWidth);
		if (!windowWidth) handleResize();
		window.addEventListener('resize', handleResize);

		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const handleClassify = (e: MouseEvent) => {
		const { id } = e.target as HTMLSpanElement;
		if (!id) return;
		setCurrentTab(id);
	};

	return (
		<>
			<section className={style.sidebar}>
				{windowWidth <= 992 && (
					<section className={style.classifyTitle} onClick={handleClassify}>
						<span
							id="classifyPost"
							className={currentTab === 'classifyPost' ? style.activeTab : ''}
						>
							분류
						</span>
						<span
							id="currentPost"
							className={currentTab === 'currentPost' ? style.activeTab : ''}
						>
							최근글
						</span>
						<span
							id="popularPost"
							className={currentTab === 'popularPost' ? style.activeTab : ''}
						>
							인기글
						</span>
					</section>
				)}
				{(windowWidth > 992 || currentTab === 'classifyPost') && (
					<section className={style.classify}>
						<b>분류</b>
						<div>
							{categoryList.map(category => {
								return (
									<Link href={`/category/${category.id}`} key={category.id}>
										<section>
											<p>
												{category.name} ({categoryLen[category.id]})
											</p>
										</section>
									</Link>
								);
							})}
						</div>
					</section>
				)}
				{(windowWidth > 992 || currentTab === 'currentPost') && (
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
				)}
				{(windowWidth > 992 || currentTab === 'popularPost') && (
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
				)}
			</section>
			<section className={style.mainContent}>{children}</section>
		</>
	);
}
