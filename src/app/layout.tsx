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
				<header>logo | search bar | user</header>
				<main>{children}</main>
				<footer>contact</footer>
			</body>
		</html>
	);
}
