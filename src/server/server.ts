// `require`로 패키지 불러오기
import express from 'express';

// express 애플리케이션 생성
const app = express();
const PORT = process.env.PORT || 3001;

// 미들웨어
app.use(express.json());

// 서버 실행
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
