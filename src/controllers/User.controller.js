import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserService from "../services/User.service.js";
import { use } from "chai";

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

  fetchWeatherData = async (req, res) => {
    try {
      const locationAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${req.body.query}&appid=${process.env.WEATHER_API_KEY}`;
      const locationResponse = await fetch(locationAPI);
      const locationResponseData = await locationResponse.json();
      if (locationResponseData.length < 1) {
        return res.status(404).json({ message: "Location not found" });
      }
      const weatherForecastAPI = `http://api.openweathermap.org/data/2.5/forecast?lat=${locationResponseData[0].lat}&lon=${locationResponseData[0].lon}&appid=${process.env.WEATHER_API_KEY}`;
      const weatherForecastResponse = await fetch(weatherForecastAPI);
      const weatherForecastResponseData = await weatherForecastResponse.json();
      res.status(200).json(weatherForecastResponseData);
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}
