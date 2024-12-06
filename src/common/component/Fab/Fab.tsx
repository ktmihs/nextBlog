'use client';

import { useRouter } from 'next/navigation';
import styles from '@/common/component/Fab/Fab.module.css';

const Fab = () => {
	const router = useRouter();
	const goToPosting = () => {
		router.push('/posting');
	};
	return (
		<button className={styles.postButton} onClick={goToPosting}>
			글쓰기
		</button>
	);
};

export default Fab;
