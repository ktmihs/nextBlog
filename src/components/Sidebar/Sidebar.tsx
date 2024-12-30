'use client';

import React, { useState, useEffect, MouseEvent } from 'react';
import styles from '@components/Sidebar/Sidebar.module.css';
import ArticlePreviewList from '@components/Sidebar/ArticlePreviewList';

const Sidebar = () => {
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
		<section className={styles.sidebar}>
			{windowWidth <= 992 && (
				<section className={styles.classifyTitle} onClick={handleClassify}>
					<span
						id="classifyPost"
						className={currentTab === 'classifyPost' ? styles.activeTab : ''}
					>
						분류
					</span>
					<span
						id="currentPost"
						className={currentTab === 'currentPost' ? styles.activeTab : ''}
					>
						최근글
					</span>
					<span
						id="popularPost"
						className={currentTab === 'popularPost' ? styles.activeTab : ''}
					>
						인기글
					</span>
				</section>
			)}
			{(windowWidth > 992 || currentTab === 'classifyPost') && (
				<ArticlePreviewList currentTab="classifyPost" />
			)}
			{(windowWidth > 992 || currentTab === 'currentPost') && (
				<ArticlePreviewList currentTab="currentPost" />
			)}
			{(windowWidth > 992 || currentTab === 'popularPost') && (
				<ArticlePreviewList currentTab="popularPost" />
			)}
		</section>
	);
};

export default Sidebar;
