import jwt from "jsonwebtoken";
import User from "../models/User.model.js";

const verifyToken = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith(`Bearer`)
  ) {
    try {
      // Get token from the header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //Get user from token
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (e) {
      res.status(401).send({ message: `Unauthorized` });
      return;
    }
  };
  
  if (!token) {
    return res.status(401).send({ message: `No token provided` });
  }
};

const isUser = (req, res, next) => {
  User.findByEmail(req.body.email).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    const userRole = user.role;
    if (userRole === `user`) {
      next();
      return;
    }
    res.status(403).send({ message: `Request requires a logged in user` });
    return;
  });
};

const authJwt = {
  verifyToken,
  isUser,
};

export default authJwt;
