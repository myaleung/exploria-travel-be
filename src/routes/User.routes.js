import { Router } from "express";
import UserController from "../controllers/User.controller.js";
import UserValidator from "../middleware/User.validator.js";

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
    this.#router.get("/login", this.#controller.loginUser);
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
