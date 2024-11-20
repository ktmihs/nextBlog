import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

export const createStore = () => {
	return configureStore({
		reducer: rootReducer,
	});
};

export type createStoreType = ReturnType<typeof createStore>;
export type RootState = ReturnType<createStoreType['getState']>;
export type AppDispatch = createStoreType['dispatch'];
