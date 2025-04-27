import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { createPost } from '../controllers/post.controller';

const router = Router();
router.post('/', authMiddleware, createPost);

export default router;
