import type { NextPage } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

interface articleType {
	id: number;
	title: string;
	thumbnail: string;
	summary: string;
	url: string;
}

const Home: NextPage = () => {
	// 임시 데이터 추가
	const articleList = new Array(4).fill(null).reduce((list, _, idx) => {
		const newArticle = {
			id: 1000 + idx,
			title: `article${idx + 1}`,
			thumbnail: 'http://test.jpg',
			summary: 'qwertyuiop asdfghjkl zxcvbnm...',
			url: `/detail/${1000 + idx}`,
		};
		return [...list, newArticle];
	}, []);

	return (
		<section className={styles.page}>
			<section className={styles.listInfo}>
				<span>total 1</span>
				<div>dropdown</div>
			</section>
			<section className={styles.articleList}>
				{articleList.map((article: articleType) => {
					return (
						<Link href={article.url} key={article.id}>
							<article className={styles.article}>
								<img src={article.thumbnail} alt={article.title} />
								<span>{article.title}</span>
								<span>{article.summary}</span>
							</article>
						</Link>
					);
				})}
			</section>
		</section>
	);
};

export default Home;
