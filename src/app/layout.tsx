import '@/styles/globals.css';
import style from '@app/layout.module.css';
import RootProvider from '@app/RootProvider';

export const metadata = {
	title: 'Next Blog',
	description: 'Next.js로 만든 블로그(임시)',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body>
				<RootProvider>
					<header className={style.header}>
						<div>hamburger</div>
						<div>logo</div>
						<section>
							<div>search bar</div>
							<div>user</div>
						</section>
					</header>
					<main className={style.main}>{children}</main>
					<footer className={style.footer}>contact</footer>
				</RootProvider>
			</body>
		</html>
	);
}
