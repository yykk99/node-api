import { Request, Response } from 'express';
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

export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().populate('author').sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get posts', error: error });
  }
};

export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id).populate('author');
    if (!post) {
      res.status(404).json({ message: 'Does not found the post' });
      return;
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to get the post', error: error });
  }
};

export const updatePost = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Does not found the post' });
      return;
    }

    post.content = req.body.content || post.content;
    await post.save();

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Failed to edit post', error: error });
  }
};

export const deletePost = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: 'Does not found post' });
      return;
    }

    if (!post.author.equals(req.user?._id)) {
      res.status(403).json({ message: 'Do not have permission' });
      return;
    }

    await post.deleteOne();
    res.status(200).json({ message: 'delete successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete post', error: error });
  }
};
