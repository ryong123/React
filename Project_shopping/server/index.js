const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5001;

// Middleware
app.use(express.json());
// CORS 설정
app.use(cors({
  origin: '*', // 클라이언트의 주소
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));


// MongoDB 연결
const uri = 'mongodb+srv://admin:nice1234!!@shoppingproject.m4l31m1.mongodb.net/?retryWrites=true&w=majority&appName=ShoppingProject';
mongoose.connect(uri)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// 라우트 설정
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

// 기본 라우트
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});