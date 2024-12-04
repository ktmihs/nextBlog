'use client';

import React from 'react';
import style from '@app/(main)/layout.module.css';
import { useRouter } from 'next/navigation';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();
	const goToPosting = () => {
		router.push('/posting');
	};

	return (
		<>
			<section className={style.navbar}>
				<span>home</span>
				<span>settings</span>
			</section>
			<section className={style.mainContent}>{children}</section>
			<button className={style.postButton} onClick={goToPosting}>
				글쓰기
			</button>
		</>
	);
}
