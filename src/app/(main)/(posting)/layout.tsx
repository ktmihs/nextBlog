import React from 'react';
import style from '@app/(main)/(posting)/layout.module.css';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section className={style.sidebar}>sidebar {'>'} category, tags...</section>
			<section className={style.mainContent}>{children}</section>
		</>
	);
}
