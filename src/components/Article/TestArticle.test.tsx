import { render } from '@testing-library/react';
import { useRouter } from 'next/router';
import userEvent from '@testing-library/user-event';
import {
	ArticleBoxTest,
	ArticleRowTest,
} from '@components/Article/TestArticle';
import { articleList } from '@components/Article/Article.mock';

jest.mock('next/router', () => ({
	useRouter: jest.fn(),
}));

describe('ArticleBox 기본 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(<ArticleBoxTest article={articleList[0]} />);
		expect(container).toMatchSnapshot();
	});

	test('이미지 속성 확인', () => {
		const { getByAltText } = render(
			<ArticleBoxTest article={articleList[0]} />,
		);
		const linkElement = getByAltText('article1');
		expect(linkElement).toHaveAttribute('src', 'http://test.jpg');
	});

	test('링크 href 확인', () => {
		const { getByText } = render(<ArticleBoxTest article={articleList[0]} />);
		const linkElement = getByText('article1').closest('a');
		expect(linkElement).toHaveAttribute('href', '/detail/1000');
	});
});

describe('ArticleRow 기본 컴포넌트 테스트', () => {
	test('스냅샷 테스트', () => {
		const { container } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);
		expect(container).toMatchSnapshot();
	});

	test('활성 상태 확인', () => {
		const { container } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);
		const liElement = container.firstChild;
		expect(liElement).toHaveClass('currentArticle');
	});

	test('비활성 상태 확인', () => {
		const { container } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[1].id} />,
		);
		const liElement = container.firstChild;
		expect(liElement).not.toHaveClass('currentArticle');
	});

	test('링크 href 확인', () => {
		const { getByText } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);
		const linkElement = getByText('article1').closest('a');
		expect(linkElement).toHaveAttribute('href', '/detail/1000');
	});

	test('제목 날짜 렌더링 확인', () => {
		const { getByText } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);
		expect(getByText('article1')).toBeInTheDocument();
		expect(getByText('2024-12-04')).toBeInTheDocument();
	});
});

describe('ArticleBox 이벤트 테스트', () => {
	test('링크 클릭 시 제대로 이동하는지 확인', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(<ArticleBoxTest article={articleList[0]} />);
		const linkElement = getByRole('link');
		await userEvent.click(linkElement);

		expect(mockPush).toHaveBeenCalledWith('/detail/1000');
	});

	test('키보드 네비게이션 및 접근성 테스트', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(<ArticleBoxTest article={articleList[0]} />);
		const linkElement = getByRole('link');
		linkElement.focus();

		await userEvent.keyboard('{Enter}');
		expect(mockPush).toHaveBeenCalledWith('/detail/1000');
	});
});

describe('ArticleRow 이벤트 테스트', () => {
	test('링크 클릭 시 제대로 이동하는지 확인', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);
		const linkElement = getByRole('link');
		await userEvent.click(linkElement);

		expect(mockPush).toHaveBeenCalledWith('/detail/1000');
	});

	test('키보드 네비게이션 및 접근성 테스트', async () => {
		const mockPush = jest.fn();
		(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

		const { getByRole } = render(
			<ArticleRowTest article={articleList[0]} currentId={articleList[0].id} />,
		);

		const linkElement = getByRole('link');
		linkElement.focus();

		await userEvent.keyboard('{Enter}');
		expect(mockPush).toHaveBeenCalledWith('/detail/1000');
	});
});
