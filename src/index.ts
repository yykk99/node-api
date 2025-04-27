import dotenv from 'dotenv';
import connectDB from './db/mongoose';
import app from './app';
import { env } from './config/env';

dotenv.config();
connectDB();

const PORT = env.PORT;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
