import type { NextPage } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

interface articleType {
	id: string;
	title: string;
	thumbnail: string;
	summary: string;
	url: string;
}

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
					return (
						<li key={article.id}>
							<article className={styles.article}>
								<Link href={article.url}>
									<img src={article.thumbnail} alt={article.title} />
									<h3>{article.title}</h3>
									<span>{article.summary}</span>
								</Link>
							</article>
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Home;
