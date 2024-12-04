import type { NextPage } from 'next';
import styles from '@app/(main)/(posting)/(home)/page.module.css';
import ArticleBox from '@/common/component/article/articleBox';
import { articleType } from '@/common/component/article/articleBoxType';

const Home: NextPage = () => {
	// 임시 데이터 추가
	const articleList = new Array(4).fill(null).reduce((list, _, idx) => {
		const newArticle = {
			id: `${1000 + idx}`,
			title: `article${idx + 1}`,
			thumbnail: 'http://test.jpg',
			summary: 'qwertyuiop asdfghjkl zxcvbnm...',
			url: `/detail/${1000 + idx}`,
		};
		return [...list, newArticle];
	}, []);
	const totalCnt = articleList.length;

	return (
		<section className={styles.page}>
			<h2 className={styles.categoryName}>main page</h2>
			<section className={styles.listInfo}>
				<span>전체 {totalCnt}개의 글</span>
				<div>dropdown</div>
			</section>
			<ul className={styles.articleList}>
				{articleList.map((article: articleType) => {
					return <ArticleBox article={article} />;
				})}
			</ul>
		</section>
	);
};

export default Home;
