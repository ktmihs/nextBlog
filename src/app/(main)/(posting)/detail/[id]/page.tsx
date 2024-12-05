import { FC } from 'react';
import { IDPropsType } from '@/common/type';
import styles from '@/app/(main)/(posting)/detail/[id]/page.module.css';
import { articleList } from '@/common/component/article/article.mock';
import { articleType } from '@/common/component/article/articleType';
import ArticleRow from '@/common/component/article/articleRow';
import ArticleDetail from '@/common/component/article/articleDetail';

const DetailPage: FC<IDPropsType> = ({ params }) => {
	// id 기반 페이지 렌더링
	const { id } = params;

	return (
		<div className={styles.articleContainer}>
			<section>
				<span>현재 카테고리명</span>
				<div>
					<ul className={styles.articleList}>
						{articleList.map((article: articleType) => (
							<ArticleRow article={article} currentId={id} key={article.id} />
						))}
					</ul>
				</div>
			</section>
			<hr />
			<ArticleDetail currentId={id} />
		</div>
	);
};

export default DetailPage;
