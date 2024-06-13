import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  editUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      !id && res.status(400).json({ message: "Invalid id" });
      !body && res.status(400).json({ message: "Invalid request body" });

      const updatedUser = await this.#service.editUser(body, id);

      !updatedUser && res.status(404).json({ message: "User not found" });

      res.status(202).json(updatedUser);
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
    try {
      //check the city exists in user's saved locations
      const locationExists = await this.#service.checkLocationExists(
        req.body.email,
        req.body.city,
        req.body.lat,
        req.body.lon
      );

      if (locationExists) {
        //remove location from user bookmarks
        const userSavedLocations = await this.#service.removeFromSavedLocations(
          req.body.email,
          req.body.city,
          req.body.lat,
          req.body.lon
        );
        userSavedLocations &&
          res
            .status(200)
            .json({ message: "Location removed from user bookmarks" });
      } else {
        //go to service to add location to user bookmarks
        const userSavedLocations = await this.#service.addToSavedLocations(
          req.body.email,
          req.body.city,
          req.body.lat,
          req.body.lon
        );
        userSavedLocations &&
          res.status(200).json({ message: "Location added to user bookmarks" });
      }
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
