import { IDPropsType } from '@/common/type';
import { FC } from 'react';

const SearchPage: FC<IDPropsType> = ({ params }) => {
	return <div>search page ({params.id})</div>;
};

export default SearchPage;
