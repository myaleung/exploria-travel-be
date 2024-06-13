import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({ message: `No token provided` });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: `Unauthorised` });
    }

    req.body.email = decoded.email;
    next();
  });
};

const isUser = (req, res, next) => {
  User.findByEmail(req.body.email).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find({ _id: { $in: user.roles } }, (err, roles) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (roles.name === `user`) {
        next();
        return;
      }
      res.status(403).send({ message: `Request requires a logged in user` });
      return;
    });
  });
};

const authJwt = {
  verifyToken,
  //   isAdmin,
  isUser,
};

export default authJwt;
