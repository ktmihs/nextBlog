'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { createStore, createStoreType } from '@lib/store';

export default function StoreProvider({ children }: { children: ReactNode }) {
	const storeRef = useRef<createStoreType>();
	if (!storeRef.current) {
		storeRef.current = createStore();
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
