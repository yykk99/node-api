import express from 'express';
import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);

export default app;
