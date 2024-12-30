import React from 'react';
import styles from '@app/(main)/layout.module.css';
import Fab from '@components/Fab/Fab';
import { ChildrenType } from '@common/type';

export default function MainLayout({ children }: ChildrenType) {
	return (
		<>
			<section className={styles.navbar}>
				<span>home</span>
				<span>settings</span>
			</section>
			<section className={styles.mainContent}>{children}</section>
			<Fab />
		</>
	);
}
