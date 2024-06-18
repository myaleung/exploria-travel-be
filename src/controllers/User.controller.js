import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/User.service.js";
import user from "../models/User.model.js";

export default class UserController {
  #service;

  constructor(service = new UserService()) {
    this.#service = service;
  }

  generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  };

  loginUser = async (req, res) => {
    try {
      const result = await this.#service.loginUser(req.body);
      if (!result) {
        return { status: 404, message: `User with ${body.email} not found` };
      }

      if (!bcrypt.compareSync(req.body.password, result.password)) {
        return { status: 401, message: "Invalid password" };
      }

      return res.status(200).json({
        id: result._id,
        fullName: result.fullName,
        email: result.email,
        token: this.generateToken(result._id),
      });
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  addUser = async (req, res) => {
    const invalidError = new Error("Please enter all fields");
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);
    try {
      if (!req.body) throw invalidError;

      const userDetails = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
      };

      const newUser = await this.#service.addUser(userDetails);
      if (!newUser._id) throw new Error("Unable to create user");
      return res.status(201).json({
        status: 201,
        message: "User registered",
        data: {
          id: newUser._id,
          fullName: newUser.fullName,
          email: newUser.email,
          token: this.generateToken(newUser._id),
        },
      });
    } catch (e) {
      if (e.message === invalidError.message) {
        return res.status(400).json({ status: 400, message: e.message });
      }
      return res.status(500).json({ status: 500, message: e.message });
    }
  };

  editUserPw = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(body.password, salt);
    try {
      if (!id) return res.status(400).json({ message: "Invalid id" });
      if (!body)
        return res.status(400).json({ message: "Invalid request body" });
      const updatedUser = await this.#service.editUserPw(
        { password: newPassword },
        id
      );

      if (!updatedUser)
        return res.status(404).json({ message: "User not found" });

      return res.status(200).json(updatedUser);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  showUserBookmarks = async (req, res) => {
    try {
      //go to service to get user bookmarks
      const userSavedLocations = await this.#service.retrieveSavedLocations(
        req.user.id
      );
      if (userSavedLocations) return res.status(200).json(userSavedLocations);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };

  updateUserBookmarks = async (req, res) => {
    const { city, lat, lon } = req.body;
    try {
      //check the city exists in user's saved locations
      const checkLocationResponse = await this.#service.checkLocationExists(
        req.user.id, city, lat, lon
      );

      if (checkLocationResponse.locationExists) {
        //remove location from user bookmarks
        const userSavedLocations = await this.#service.removeFromSavedLocations(
          checkLocationResponse.user, city, lat, lon
        );
        if (userSavedLocations)
          return res.status(200).json({ message: "Location removed from user bookmarks" });
      } else {
        //go to service to add location to user bookmarks
        const userSavedLocations = await this.#service.addToSavedLocations(
          checkLocationResponse.user, city, lat, lon
        );
        if (userSavedLocations)
          return res.status(200).json({ message: "Location added to user bookmarks" });
      }
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
}
