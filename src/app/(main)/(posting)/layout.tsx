import React from 'react';
import style from '@app/(main)/(posting)/layout.module.css';
import { ChildrenType } from '@/common/type';
import Sidebar from '@/common/component/Sidebar/Sidebar';

export default function PostingLayout({ children }: ChildrenType) {
	return (
		<>
			<Sidebar />
			<section className={style.mainContent}>{children}</section>
		</>
	);
}
