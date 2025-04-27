import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import Post from '../models/post.model';

export const createPost = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user?._id;
  const { content } = req.body;

  if (!content) {
    res.status(400).json({ message: 'Content is required' });
    return;
  }

  try {
    const post = new Post({
      author: userId,
      content,
      likes: [],
    });

    await post.save();

    res.status(201).json({
      message: 'Post created successfully',
      post,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to create post', error: err });
    return;
  }
};
