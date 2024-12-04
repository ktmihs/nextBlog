import React from 'react';
import style from '@app/(main)/layout.module.css';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section className={style.navbar}>
				<span>home</span>
				<span>settings</span>
			</section>
			<section className={style.mainContent}>{children}</section>
			<button className={style.postButton}>글쓰기</button>
		</>
	);
}
