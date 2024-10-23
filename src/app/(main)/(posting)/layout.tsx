import React from 'react';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section>sidebar {'>'} category, tags...</section>
			<section>{children}</section>
		</>
	);
}
