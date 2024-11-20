import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const rootStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type rootStoreType = ReturnType<typeof rootStore>;
export type RootState = ReturnType<rootStoreType['getState']>;
export type AppDispatch = rootStoreType['dispatch'];
