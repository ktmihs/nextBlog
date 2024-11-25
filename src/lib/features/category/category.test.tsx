import categoryReducer, {
	setCategory,
	selectCategory,
} from '@lib/features/category/categorySlice';

const initialState = {
	categoryList: [],
	selectedCategory: null,
	currentArticleList: null,
};

const testSetCategory = () => {
	const action = setCategory({ id: 'technology', name: '기술' });
	return categoryReducer(initialState, action);
};

test('카테고리 항목 추가', () => {
	const newState = testSetCategory();
	expect(newState.categoryList.at(-1)).toEqual({
		id: 'technology',
		name: '기술',
	});
});

test('특정 카테고리 선택', () => {
	const addedState = testSetCategory();
	const action = selectCategory('technology');
	const newState = categoryReducer(addedState, action);
	expect(newState.selectedCategory).toBe('technology');
});
