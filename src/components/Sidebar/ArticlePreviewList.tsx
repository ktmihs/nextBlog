import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@lib/store';
import { articleType } from '@components/Article/ArticleType';
import { articleList } from '@components/Article/Article.mock';
import styles from '@components/Sidebar/ArticlePreviewList.module.css';
import CategoryItem from '@components/Sidebar/ArticlePreviewCategoryItem';
import PreviewArticleItem from '@components/Sidebar/ArticlePreviewItem';
import { CategoryType } from '@/lib/features/category/categorySlice';

interface classifyPostType {
	tabName: '분류';
	articleList: CategoryType[];
}

interface previewArticleType {
	tabName: '최근글' | '인기글';
	articleList: articleType[];
}

type sidebarListType = classifyPostType | previewArticleType;

const ArticlePreviewList = ({ currentTab }: { currentTab: string }) => {
	const categoryList = useSelector(
		(state: RootState) => state.category.categoryList,
	);
	const [previewArticle, setPreviewArticle] = useState<sidebarListType>({
		tabName: '분류',
		articleList: [],
	});
	useEffect(() => {
		if (currentTab === 'classifyPost') {
			setPreviewArticle({
				tabName: '분류',
				articleList: categoryList,
			});
		} else if (currentTab === 'currentPost') {
			setPreviewArticle({
				tabName: '최근글',
				articleList: articleList.slice(0, 3),
			});
		} else if (currentTab === 'popularPost') {
			setPreviewArticle({
				tabName: '인기글',
				articleList: articleList.slice(-3),
			});
		}
	}, [currentTab]);

	return (
		<section className={styles.classify}>
			<b>{previewArticle.tabName}</b>
			<div>
				{previewArticle.tabName === '분류'
					? previewArticle.articleList.map(article => (
							<CategoryItem category={article} key={article.id} />
					  ))
					: previewArticle.articleList.map(article => (
							<PreviewArticleItem article={article} key={article.id} />
					  ))}
			</div>
		</section>
	);
};

export default ArticlePreviewList;
