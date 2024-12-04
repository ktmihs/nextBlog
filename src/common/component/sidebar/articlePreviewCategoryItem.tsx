import Link from 'next/link';
import { CategoryType } from '@/lib/features/category/categorySlice';

interface categoryLenType {
	[key: string]: number;
}

const CategoryItem = ({ category }: { category: CategoryType }) => {
	// category id로 각 칵테고리의 전체 리스트 길이 가져오기
	// 데이터 가져온 후, categoryLen, categoryLenType 삭제하기
	const categoryLen: categoryLenType = {
		all: 20,
		project: 13,
		study: 7,
	};

	return (
		<Link href={`/category/${category.id}`}>
			<section>
				<p>
					{category.name} ({categoryLen[category.id]})
				</p>
			</section>
		</Link>
	);
};

export default CategoryItem;
