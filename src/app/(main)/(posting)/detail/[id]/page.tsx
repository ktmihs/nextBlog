import { FC } from 'react';
import { IDPropsType } from '@/common/type';

const DetailPage: FC<IDPropsType> = ({ params }) => {
	// id 기반 페이지 렌더링
	return <div>detail page ({params.id})</div>;
};

export default DetailPage;
