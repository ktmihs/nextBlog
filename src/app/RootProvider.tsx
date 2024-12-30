'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { rootStore, rootStoreType } from '@lib/store';
import { ChildrenType } from '@common/type';

export default function StoreProvider({ children }: ChildrenType) {
	const storeRef = useRef<rootStoreType>();
	if (!storeRef.current) {
		storeRef.current = rootStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
