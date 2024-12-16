import { useRouter } from 'next/navigation';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { rootStore } from '@/lib/store';
import {
	CategoryItem,
	PreviewArticleItem,
	DesktopSidebar,
	MobileSidebar,
} from '@common/component/Sidebar/TestSIdebar';
import { articleList } from '@common/component/Article/Article.mock';

jest.mock('next/navigation', () => ({
	useRouter: jest.fn(),
}));

const categoryList = rootStore().getState().category.categoryList;

describe('Sidebar 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(<DesktopSidebar />);
		expect(container).toMatchSnapshot();
	});

	test('Desktop 버전 Sidebar 자식 노드 미보유 확인', async () => {
		const { container } = render(<DesktopSidebar />);
		expect(container.firstChild?.firstChild).toBeNull();
	});

	test('Mobile 버전 Sidebar "classifyTitle" 보유 확인', async () => {
		const { container } = render(<MobileSidebar />);
		expect(container.firstChild?.firstChild).toHaveClass('classifyTitle');
	});

	test('Mobile 버전 Sidebar 탭 목록 확인', async () => {
		const { getByText } = render(<MobileSidebar />);
		expect(getByText('분류')).toBeInTheDocument();
		expect(getByText('최근글')).toBeInTheDocument();
		expect(getByText('인기글')).toBeInTheDocument();
	});

	test('Mobile 버전 Sidebar 탭 선택 확인', async () => {
		const { getByText } = render(<MobileSidebar />);
		const popularPostElement = getByText('인기글');
		if (popularPostElement) fireEvent.click(popularPostElement);
		expect(popularPostElement).toHaveClass('activeTab');
	});
});

describe('SidebarCategory 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(<CategoryItem category={categoryList[0]} />);
		expect(container).toMatchSnapshot();
	});

	test('SidebarCategory 링크 이동', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(<CategoryItem category={categoryList[0]} />);
		const linkElement = getByRole('link');
		await userEvent.click(linkElement);

		expect(mockPush).toHaveBeenCalledWith('/category/all');
	});
});

describe('SidebarPreview 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(
			<PreviewArticleItem article={articleList[0]} />,
		);
		expect(container).toMatchSnapshot();
	});

	test('SidebarPreview 링크 이동', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(
			<PreviewArticleItem article={articleList[0]} />,
		);
		const linkElement = getByRole('link');
		await userEvent.click(linkElement);

		expect(mockPush).toHaveBeenCalledWith('/detail/1000');
	});
});
