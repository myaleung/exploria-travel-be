import User from "../models/User.model.js";

const checkDuplicateEmail = async (req, res, next) => {
  //Check if email exists
  try {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({ message: `Failed! Email already in use` });
    }
    next();
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

const SignUpVerify = {
  checkDuplicateEmail,
};

export default SignUpVerify;
