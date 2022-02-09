import { Request, Response, NextFunction } from 'express';
import User from '../models/user';
import { getAuth } from 'firebase-admin/auth';

// middleware to check current user on every request
// update Users collection on every request
// the User data is accessible on every endpoint as "req.user"
const verifyAndUpdateUser = async (req: Request, res: Response, next: NextFunction) => {
  // Check for access token in header
  // Token must be of authorization type, and must include "Bearer"
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    const idToken = req.headers.authorization?.split(' ')[1];

    if (idToken) {
      // Verify token
      const decodedToken = await getAuth().verifyIdToken(idToken);
      const { uid } = decodedToken;

      // Get user info from firebase
      const userRecord = await getAuth().getUser(uid);
      const { email, displayName, photoURL } = userRecord;

      // User info to query for and update user info
      // This allows us to always have the most updated version of the user
      const user = await User.findOneAndUpdate(
        { email },
        { name: displayName, picture: photoURL },
        { upsert: true, new: true }
      );

      // allows all routes to access the user on every request
      req.user = user;
      return next();
    }
  }
  next();
};

export default verifyAndUpdateUser;
