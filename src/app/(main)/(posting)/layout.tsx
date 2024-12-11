import React from 'react';
import style from '@app/(main)/(posting)/layout.module.css';
import Sidebar from '@/common/component/Sidebar/Sidebar';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Sidebar />
			<section className={style.mainContent}>{children}</section>
		</>
	);
}
