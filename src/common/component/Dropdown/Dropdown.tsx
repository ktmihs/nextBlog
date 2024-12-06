'use client';

import { MouseEvent, useEffect, useRef, useState } from 'react';
import styles from '@/common/component/Dropdown/Dropdown.module.css';

export interface dataItemType {
	key: string;
	value: string;
}

const Dropdown = ({
	dataList,
	onChange,
}: {
	dataList: dataItemType[];
	onChange: (key: string) => void;
}) => {
	const [isClosed, setIsClosed] = useState<boolean>(true);
	const [selectedItem, setSelectedItem] = useState<dataItemType>({
		key: '',
		value: '선택',
	});
	const dropdownRef = useRef<HTMLElement>(null);

	const handleClickOutside = (e: globalThis.MouseEvent): void => {
		if (!dropdownRef.current?.contains(e.target as Node)) {
			setIsClosed(true);
		} else {
			setIsClosed(state => !state);
		}
	};
	useEffect(() => {
		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isClosed]);

	const selectItem = (e: MouseEvent) => {
		const target = e.target as HTMLElement;
		const liElement = target.closest('li');
		if (!liElement) return;

		const key = liElement.getAttribute('data-key');
		if (!key) return;

		const selected = dataList.find(item => item.key === key);
		if (selected) {
			setSelectedItem(selected);
			onChange(key);
		}
	};
	return (
		<section ref={dropdownRef} className={styles.dropdown}>
			<div className={styles.selectedItemWrapper}>
				<span className={styles.selectedItem}>{selectedItem.value}</span>
			</div>
			{isClosed || (
				<ul className={styles.dropdownList} onClick={selectItem}>
					{dataList.map((item: dataItemType, idx: number) => (
						<li
							data-key={item.key}
							key={idx}
							className={`${
								selectedItem.key === item.key ? styles.selectedListItem : ''
							}`}
						>
							<span>{item.value}</span>
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default Dropdown;
