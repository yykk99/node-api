import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth.middleware';
import User from '../models/user.model';

export const getMe = async (req: AuthenticatedRequest, res: Response) => {
  if (!req.user) {
    res.status(401).json({ message: 'Not authenticated' });
    return;
  }
  res.status(200).json({
    user: {
      id: req.user._id,
      username: req.user.username,
      email: req.user.email,
    },
  });
};

export const updateProfile = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user?._id;
  const { username, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, email },
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    res.json({
      message: 'Profile updated successfully',
      user: {
        id: updatedUser._id,
        username: updatedUser.username,
        email: updatedUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to update profile', error: err });
    return;
  }
};

export const deleteAccount = async (req: AuthenticatedRequest, res: Response) => {
  const userId = req.user?._id;

  try {
    const deletedUser = await User.findByIdAndDelete(userId);

    if (!deletedUser) {
      res.status(404).json({ message: 'User not found' });
      return;
    }
    res.json({ message: 'Account deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete account', error: err });
    return;
  }
};
