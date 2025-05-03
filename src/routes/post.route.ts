import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import {
  createPost,
  deletePost,
  getAllPosts,
  getPostById,
  likePost,
  updatePost,
} from '../controllers/post.controller';

const router = Router();
router.post('/', authMiddleware, createPost);
router.get('/', authMiddleware, getAllPosts);
router.get('/:id', authMiddleware, getPostById);
router.put('/:id', authMiddleware, updatePost);
router.delete('/:id', authMiddleware, deletePost);
router.post('/:id/like', authMiddleware, likePost);

export default router;
