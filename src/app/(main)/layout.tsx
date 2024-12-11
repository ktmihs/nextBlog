import React from 'react';
import style from '@app/(main)/layout.module.css';
import Fab from '@/common/component/Fab/Fab';
import { ChildrenType } from '@/common/type';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<>
			<section className={style.navbar}>
				<span>home</span>
				<span>settings</span>
			</section>
			<section className={style.mainContent}>{children}</section>
			<Fab />
		</>
	);
}
