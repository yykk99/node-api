import { Router } from 'express';
import { authMiddleware } from '../middlewares/auth.middleware';
import { deleteAccount, getMe, updateProfile } from '../controllers/user.controller';

const router = Router();
router.get('/me', authMiddleware, getMe);
router.put('/me', authMiddleware, updateProfile);
router.delete('/me', authMiddleware, deleteAccount);

export default router;
