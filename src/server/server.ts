import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import categoryRouter from './routes/category';
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const DB_URI = process.env.DB_URI || '';

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/category', categoryRouter);

// MONGODB 서버 실행
mongoose
	.connect(DB_URI)
	.then(() => console.log('Successfully connected to mongodb'))
	.catch(e => console.error(e));

// 서버 실행
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
