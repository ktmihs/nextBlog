import Link from 'next/link';
import '@styles/globals.css';
import RootProvider from '@app/RootProvider';
import styles from '@app/layout.module.css';
import { ChildrenType } from '@common/type';

export const metadata = {
	title: 'Next Blog',
	description: 'Next.js로 만든 블로그(임시)',
};

export default function RootLayout({ children }: ChildrenType) {
	return (
		<html lang="ko">
			<body>
				<RootProvider>
					<header className={styles.header}>
						<Link href={'/'}>
							<h1>logo</h1>
						</Link>
						<section className={styles.UIbar}>
							<div>search bar</div>
							<div>user</div>
						</section>
					</header>
					<main className={styles.main}>{children}</main>
					<footer className={styles.footer}>contact</footer>
				</RootProvider>
			</body>
		</html>
	);
}
