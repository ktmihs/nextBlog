import categoryReducer, {
	setCategory,
	selectCategory,
	CategoryType,
	CategoryStateType,
} from '@lib/features/category/categorySlice';

const initialState: CategoryStateType = {
	categoryList: [],
	selectedCategory: null,
	currentArticleList: null,
};

const testSetCategory = (params: CategoryType, state = initialState) => {
	const action = setCategory(params);
	return categoryReducer(state, action);
};

test('카테고리 항목 추가', () => {
	const newState = testSetCategory({ id: 'technology', name: '기술' });
	expect(newState.categoryList.at(-1)).toEqual({
		id: 'technology',
		name: '기술',
	});
});

test('카테고리 항목 여러개 추가', () => {
	const state1 = testSetCategory({ id: 'all', name: '전체' });
	const state2 = testSetCategory({ id: 'project', name: 'project' }, state1);
	const state3 = testSetCategory({ id: 'study', name: 'study' }, state2);
	const newState = testSetCategory({ id: 'technology', name: '기술' }, state3);
	expect(newState.categoryList).toEqual([
		{ id: 'all', name: '전체' },
		{ id: 'project', name: 'project' },
		{ id: 'study', name: 'study' },
		{ id: 'technology', name: '기술' },
	]);
});

test('특정 카테고리 선택', () => {
	const addedState = testSetCategory({ id: 'technology', name: '기술' });
	const action = selectCategory('technology');
	const newState = categoryReducer(addedState, action);
	expect(newState.selectedCategory).toBe('technology');
});
