import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  updatePost,
} from '../controllers/post.controller';

const router = Router();
router.post('/', authMiddleware, createPost);
router.get('/', authMiddleware, getAllPosts);
router.get('/:id', authMiddleware, getPostById);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);

export default router;
