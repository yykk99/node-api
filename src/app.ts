import express from 'express';
import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';
import postRoute from './routes/post.route';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/posts', postRoute);

export default app;
