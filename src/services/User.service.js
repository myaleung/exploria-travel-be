import User from "../models/User.model.js";

export default class UserService {
  getUsers = async () => {
    return await User.find({});
  };

  addUser = async (newUser) => {
    let user;
    try {
      user = new User(newUser);
    } catch (e) {
      throw new Error("Invalid User");
    }
    return await user.save();
  };

  editUser = async (updatedUser, id) => {
    return await User.findOneAndUpdate({ _id: id }, updatedUser, {
      new: true,
    });
  };
}
