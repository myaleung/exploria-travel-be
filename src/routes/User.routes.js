import { Router } from "express";
import UserController from "../controllers/User.controller.js";
import UserValidator from "../middleware/User.validator.js";
import authJwt from "../middleware/Jwt.authenticator.js";

export default class UserRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new UserController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.use((req, res, next) => {
      res.header(`x-access-token, Origin, Content-Type, Accept`);
      next();
    });

    this.#router.post("/results/:_id", this.#controller.fetchWeatherData);
    this.#router.post(
      "/saved-locations",
      authJwt.verifyToken,
      this.#controller.showUserBookmarks
    ); // POST the email to get the saved locations
    this.#router.post("/login", this.#controller.loginUser);
    this.#router.post(
      "/signup",
      UserValidator.validate(),
      this.#controller.addUser
    );
    this.#router.put(
      "/edit/:_id",
      UserValidator.validate(),
      this.#controller.editUser
    );
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}
