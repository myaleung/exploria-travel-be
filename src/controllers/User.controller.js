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
      res.json(await this.#service.loginUser(req.body));
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
      userSavedLocations &&
        res.status(200).json(userSavedLocations.savedLocations);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
