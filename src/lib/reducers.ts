import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from '@lib/features/category/categorySlice';

const rootReducer = combineReducers({
	category: categoryReducer,
});

export default rootReducer;
