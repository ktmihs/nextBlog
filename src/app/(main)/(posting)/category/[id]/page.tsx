import { FC } from 'react';
import { IDPropsType } from '@/common/type';

const CategoryPage: FC<IDPropsType> = ({ params }) => {
	return <div>category page ({params.id})</div>;
};

export default CategoryPage;
