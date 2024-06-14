import bcrypt from "bcrypt";

import UserService from "../services/User.service.js";

export default class UserController {
  #service;

  constructor(service = new UserService()) {
    this.#service = service;
  }

  loginUser = async (req, res) => {
    try {
      const result = await this.#service.loginUser(req.body);
      res.status(200).json(result);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  addUser = async (req, res) => {
    const invalidError = new Error("Invalid User");
    const salt = bcrypt.genSaltSync(10);
    try {
      if (!req.body) throw invalidError;

      const userDetails = {
        fullName: req.body.fullName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, salt),
      };

      const newUser = await this.#service.addUser(userDetails);
      if (!newUser._id) throw new Error("Unable to create user");
      res.status(201).json(newUser);
    } catch (e) {
      if (e.message === invalidError.message) {
        res.status(400).json({ message: e.message });
      }
      res.status(500).json({ message: e.message });
    }
  };

  editUserPw = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const salt = bcrypt.genSaltSync(10);
    const newPassword = bcrypt.hashSync(body.password, salt);
    try {
      !id && res.status(400).json({ message: "Invalid id" });
      !body && res.status(400).json({ message: "Invalid request body" });
      const updatedUser = await this.#service.editUserPw(
        { password: newPassword },
        id
      );

      !updatedUser && res.status(404).json({ message: "User not found" });

      res.status(200).json(updatedUser);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  showUserBookmarks = async (req, res) => {
    try {
      //go to service to get user bookmarks
      const userSavedLocations = await this.#service.retrieveSavedLocations(
        req.body.email
      );
      userSavedLocations && res.status(200).json(userSavedLocations);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };

  updateUserBookmarks = async (req, res) => {
    const { email, city, lat, lon } = req.body;
    try {
      //check the city exists in user's saved locations
      const locationExists = await this.#service.checkLocationExists(
        email,
        city,
        lat,
        lon
      );

      if (locationExists) {
        //remove location from user bookmarks
        const userSavedLocations = await this.#service.removeFromSavedLocations(
          email,
          city,
          lat,
          lon
        );
        userSavedLocations &&
          res
            .status(200)
            .json({ message: "Location removed from user bookmarks" });
      } else {
        //go to service to add location to user bookmarks
        const userSavedLocations = await this.#service.addToSavedLocations(
          email,
          city,
          lat,
          lon
        );
        userSavedLocations &&
          res.status(200).json({ message: "Location added to user bookmarks" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
