import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../models/User.model.js";

export default class UserService {
  loginUser = async (body) => {
    try {
      const user = await User.findOne({ email: body.email });
      if (!user) {
        return { status: 404, message: `User with ${body.email} not found` };
      }

      if (!bcrypt.compareSync(body.password, user.password)) {
        return { status: 401, message: "Invalid password" };
      }

      const accessToken = jwt.sign(
        { email: body.email },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );

      return {
        status: 200,
        id: user._id,
        fullName: user.fullName,
        email: user.email,
        // roles: authorities,
        token: accessToken,
      };
    } catch (e) {
      return { status: 500, message: e.message };
    }
  };

  addUser = async (userDetails) => {
    let user;
    try {
      user = new User(userDetails);
      return await user.save();
    } catch (e) {
      throw new Error("Invalid User, account may already exist");
    }
  };

  editUser = async (updatedUser, id) => {
    return await User.findOneAndUpdate({ _id: id }, updatedUser, {
      new: true,
    });
  };

  retrieveSavedLocations = async (email) => {
    try {
      return await User.findOne({ email: email });
    } catch (e) {
      res.status(404).json({ message: "User not found" });
    }
  };
}
