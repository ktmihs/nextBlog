'use client';

import styles from '@common/component/Editor/Editor.module.css';
import Editor from '@common/component/Editor/Editor';
import { useRef, useState } from 'react';
import { Delta } from 'quill';

export const EditorWrapper = () => {
	const [range, setRange] = useState(Object);
	const [lastChange, setLastChange] = useState(Object);

	const quillRef = useRef(null);
	const handleClick = () => {
		const content = quillRef.current && quillRef.current.getContents();
		console.log(JSON.stringify(content));
	};

	return (
		<div className={styles.editorWrapper}>
			<Editor
				ref={quillRef}
				defaultValue={new Delta()}
				onSelectionChange={setRange}
				onTextChange={setLastChange}
			/>
			{/* <div className={styles.controls}></div> */}
			{/* <div className="state">
				<div className="state-title">Current Range:</div>
				{range ? JSON.stringify(range) : 'Empty'}
			</div>
			<div className="state">
				<div className="state-title">Last Change:</div>
				{lastChange ? JSON.stringify(lastChange.ops) : 'Empty'}
			</div> */}
			<div>
				<button onClick={handleClick}>글쓰기</button>
			</div>
		</div>
	);
};
