import styles from '@common/component/ArticleListControls/ArticleListControls.module.css';
import { articleList } from '@/common/component/Article/Article.mock';

const ArticleListControls = () => {
	const totalCnt = articleList.length;

	return (
		<section className={styles.listInfo}>
			<span>전체 {totalCnt}개의 글</span>
			<div>dropdown</div>
		</section>
	);
};

export default ArticleListControls;
