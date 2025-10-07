import categoryReducer, {
	addCategory,
	selectCategory,
	removeSelectedCategory,
	CategoryType,
	CategoryStateType,
} from '@lib/features/category/categorySlice';

const initialState: CategoryStateType = {
	categoryList: [],
	selectedCategory: null,
	loading: false,
	error: null,
};

const testAddCategory = (params: CategoryType, state = initialState) => {
	const action = addCategory(params);
	return categoryReducer(state, action);
};

test('카테고리 항목 추가', () => {
	const newState = testAddCategory({ id: 'technology', name: '기술' });
	expect(newState.categoryList.at(-1)).toEqual({
		id: 'technology',
		name: '기술',
	});
});

test('카테고리 항목 여러개 추가', () => {
	const state1 = testAddCategory({ id: 'all', name: '전체' });
	const state2 = testAddCategory({ id: 'project', name: 'project' }, state1);
	const state3 = testAddCategory({ id: 'study', name: 'study' }, state2);
	const newState = testAddCategory({ id: 'technology', name: '기술' }, state3);
	expect(newState.categoryList).toEqual([
		{ id: 'all', name: '전체' },
		{ id: 'project', name: 'project' },
		{ id: 'study', name: 'study' },
		{ id: 'technology', name: '기술' },
	]);
});

test('특정 카테고리 선택', () => {
	const addedState = testAddCategory({ id: 'technology', name: '기술' });
	const action = selectCategory('technology');
	const newState = categoryReducer(addedState, action);
	expect(newState.selectedCategory).toBe('technology');
});

test('선택된 카테고리 삭제', () => {
	const addedState = testAddCategory({ id: 'technology', name: '기술' });
	const action = selectCategory('technology');
	const newState = categoryReducer(addedState, action);
	const newAction = removeSelectedCategory();
	const removeState = categoryReducer(newState, newAction);
	expect(removeState.categoryList).toEqual([]);
	expect(removeState.selectedCategory).toBe(null);
});
