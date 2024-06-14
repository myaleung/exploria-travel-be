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
    try {
      const user = new User(userDetails);
      return await user.save();
    } catch (e) {
      throw new Error("Invalid User");
    }
  };

  editUserPw = async (updatedPw, id) => {
    return await User.findOneAndUpdate({ _id: id }, updatedPw, {
      new: true,
    });
  };

  retrieveSavedLocations = async (email) => {
    try {
      const validUser = await User.findOne({ email: email });

      if (validUser) {
        return validUser.savedLocations;
      }
    } catch (e) {
      res.status(404).json({ message: "User not found" });
    }
  };

  addToSavedLocations = async (email, city, lat, lon) => {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        user.savedLocations.push({ city: city, longitude: lon, latitude: lat });
        return await user.save();
      }
    } catch (e) {
      res.status(404).json({ message: "User not found" });
    }
  };

  checkLocationExists = async (email, city, lat, lon) => {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        //check if location exists in saved locations
        return user.savedLocations.some(
          (location) =>
            location.city === city &&
            location.latitude == lat &&
            location.longitude == lon
        );
      }
    } catch (e) {
      res.status(404).json({ message: "User not found" });
    }
  };

  removeFromSavedLocations = async (email, city, lat, lon) => {
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const newSavedLocations = user.savedLocations.filter((location) => {
          return (
            location.city !== city &&
            location.latitude !== lat &&
            location.longitude !== lon
          );
        });
        user.savedLocations = newSavedLocations;
        return await user.save();
      }
    } catch (e) {}
  };
}
