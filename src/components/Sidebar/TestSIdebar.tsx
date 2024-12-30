import React, { useState, MouseEvent } from 'react';
import { useRouter } from 'next/navigation';
import { CategoryType } from '@/lib/features/category/categorySlice';
import { articleType } from '@components/Article/ArticleType';
import styles from '@components/Sidebar/ArticlePreviewItem.module.css';
import style from '@components/Sidebar/Sidebar.module.css';

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
			<section className={styles.summarySection}>
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
		<section className={style.sidebar}>
			{windowWidth > 992 && (
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
		</section>
	);
};
