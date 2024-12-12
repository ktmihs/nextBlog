import Dropdown from '@common/component/Dropdown/Dropdown';
import { fireEvent, render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
const filterOption = [
	{
		key: 'option1',
		value: '인기순',
	},
	{
		key: 'option2',
		value: '최신순',
	},
	{
		key: 'option3',
		value: '오래된순',
	},
];

describe('Dropdown 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		expect(container).toMatchSnapshot();
	});

	test('Dropdown 기본형 확인', () => {
		const { getByText } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		expect(getByText('선택')).toBeInTheDocument();
	});

	test('Dropdown 열기', () => {
		const { getByText, getByRole } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		fireEvent.click(getByText('선택'));
		expect(getByRole('list')).toBeInTheDocument();
	});

	test('Dropdown 닫기', async () => {
		const { getByText, queryByRole } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		fireEvent.click(getByText('선택'));
		fireEvent.click(document.body);
		await waitFor(() => expect(queryByRole('list')).not.toBeInTheDocument());
	});

	test('Dropdown 아이템 선택 시 닫힘', async () => {
		const { getByText, queryByRole } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		fireEvent.click(getByText('선택'));
		const item = getByText('인기순');
		userEvent.click(item);
		await waitFor(() => expect(queryByRole('list')).not.toBeInTheDocument());
	});

	test('Dropdown 아이템 선택 시 값 가져오기', async () => {
		const { getByText } = render(
			<Dropdown dataList={filterOption} onChange={() => {}} />,
		);
		fireEvent.click(getByText('선택'));
		const item = getByText('인기순');
		userEvent.click(item);
		expect(getByText('인기순')).toBeInTheDocument();
	});
});
