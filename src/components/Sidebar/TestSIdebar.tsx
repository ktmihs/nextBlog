import React, { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CategoryType } from '@lib/features/category/categorySlice';
import { articleType } from '@components/Article/ArticleType';
import articlePreviewItemStyles from '@components/Sidebar/ArticlePreviewItem.module.css';
import sidebarStyles from '@components/Sidebar/Sidebar.module.css';

interface categoryLenType {
	[key: string]: number;
}

export const CategoryItem = ({ category }: { category: CategoryType }) => {
	const router = useRouter();
	const categoryLen: categoryLenType = {
		all: 20,
		project: 13,
		study: 7,
	};

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		router.push(`/category/${category.id}`);
	};

	return (
		<a href={`/category/${category.id}`} onClick={handleClick}>
			<section>
				<p>
					{category.name} ({categoryLen[category.id]})
				</p>
			</section>
		</a>
	);
};

export const PreviewArticleItem = ({ article }: { article: articleType }) => {
	const router = useRouter();

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();
		router.push(`/detail/${article.id}`);
	};
	return (
		<a href={`/detail/${article.id}`} onClick={handleClick}>
			<section className={articlePreviewItemStyles.summarySection}>
				<p>{article.title}</p>
				<img src={article.thumbnail} alt={article.title} />
			</section>
		</a>
	);
};

export const DesktopSidebar = () => {
	const windowWidth = window.innerWidth;
	const [currentTab, setCurrentTab] = useState<string>('classifyPost');

	const handleClassify = (e: MouseEvent) => {
		const { id } = e.target as HTMLSpanElement;
		if (!id) return;
		setCurrentTab(id);
	};

	return (
		<section className={sidebarStyles.sidebar}>
			{windowWidth <= 992 && (
				<section
					className={sidebarStyles.classifyTitle}
					onClick={handleClassify}
				>
					<span
						id="classifyPost"
						className={
							currentTab === 'classifyPost' ? sidebarStyles.activeTab : ''
						}
					>
						분류
					</span>
					<span
						id="currentPost"
						className={
							currentTab === 'currentPost' ? sidebarStyles.activeTab : ''
						}
					>
						최근글
					</span>
					<span
						id="popularPost"
						className={
							currentTab === 'popularPost' ? sidebarStyles.activeTab : ''
						}
					>
						인기글
					</span>
				</section>
			)}
		</section>
	);
};

export const MobileSidebar = () => {
	const windowWidth = window.innerWidth;
	const [currentTab, setCurrentTab] = useState<string>('classifyPost');

	const handleClassify = (e: MouseEvent) => {
		const { id } = e.target as HTMLSpanElement;
		if (!id) return;
		setCurrentTab(id);
	};

	return (
		<section className={sidebarStyles.sidebar}>
			{windowWidth > 992 && (
				<section
					className={sidebarStyles.classifyTitle}
					onClick={handleClassify}
				>
					<span
						id="classifyPost"
						className={
							currentTab === 'classifyPost' ? sidebarStyles.activeTab : ''
						}
					>
						분류
					</span>
					<span
						id="currentPost"
						className={
							currentTab === 'currentPost' ? sidebarStyles.activeTab : ''
						}
					>
						최근글
					</span>
					<span
						id="popularPost"
						className={
							currentTab === 'popularPost' ? sidebarStyles.activeTab : ''
						}
					>
						인기글
					</span>
				</section>
			)}
		</section>
	);
};
