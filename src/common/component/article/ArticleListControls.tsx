'use client';

import styles from '@common/component/Article/ArticleListControls.module.css';
import Dropdown from '@/common/component/Dropdown/Dropdown';
import { articleList } from '@/common/component/Article/Article.mock';

const ArticleListControls = () => {
	const totalCnt = articleList.length;
	const filterOption = [
		{
			key: 'option1',
			value: '인기순',
		},
		{
			key: 'option2',
			value: '최신순',
		},
		{
			key: 'option3',
			value: '오래된순',
		},
	];

	const handleChange = (key: string) => {
		if (key) {
			// key에 대한 정렬 방식으로 데이터 새로 받아오기
		}
	};

	return (
		<section className={styles.listInfo}>
			<span>전체 {totalCnt}개의 글</span>
			<Dropdown dataList={filterOption} onChange={handleChange} />
		</section>
	);
};

export default ArticleListControls;
