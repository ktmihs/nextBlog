import React from 'react';

export default function PostingLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<section>sidebar {'>'} catecory, tags...</section>
			<section>tets{children}</section>
		</>
	);
}
