import React from 'react';

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section>nav bar {'>'} home, settings...</section>
			<section>{children}</section>
		</>
	);
}
