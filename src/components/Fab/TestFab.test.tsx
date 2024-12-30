import { useRouter } from 'next/navigation';
import Fab from '@components/Fab/Fab';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

describe('FAB 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(<Fab />);
		expect(container).toMatchSnapshot();
	});

	test('FAB 링크 이동', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(<Fab />);
		const buttonElement = getByRole('button');
		await userEvent.click(buttonElement);

		expect(mockPush).toHaveBeenCalledWith('/posting');
	});

	test('키보드 네비게이션 및 접근성 테스트', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(<Fab />);
		const buttonElement = getByRole('button');
		buttonElement.focus();

		await userEvent.keyboard('{Enter}');
		expect(mockPush).toHaveBeenCalledWith('/posting');
	});
});
