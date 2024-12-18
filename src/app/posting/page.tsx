import type { NextPage } from 'next';
import styles from '@app/posting/page.module.css';
import { EditorWrapper } from '@/common/component/Editor/EditorWrapper';

const PostingPage: NextPage = () => {
	return (
		<div className={styles.postingContainer}>
			<EditorWrapper />
		</div>
	);
};

export default PostingPage;
