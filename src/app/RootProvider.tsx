'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { rootStore, rootStoreType } from '@lib/store';

export default function StoreProvider({ children }: { children: ReactNode }) {
	const storeRef = useRef<rootStoreType>();
	if (!storeRef.current) {
		storeRef.current = rootStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
