import { Router } from "express";
import authJwt from "../middleware/Jwt.authenticator.js";
import SignUpVerify from "../middleware/SignUp.verify.js";
import PasswordValidator from "../middleware/Password.validator.js";
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
    this.#router.put(
      "/save-location",
      authJwt.verifyToken,
      this.#controller.updateUserBookmarks
    );
    this.#router.post("/login", this.#controller.loginUser);
    this.#router.post(
      "/saved-locations",
      authJwt.verifyToken,
      this.#controller.showUserBookmarks
    ); // POST the email to get the saved locations
    this.#router.post(
      "/sign-up",
      UserValidator.validate(),
      SignUpVerify.checkDuplicateEmail,
      this.#controller.addUser
    );
    this.#router.put(
      "/edit/:id",
      authJwt.verifyToken,
      PasswordValidator.validate(),
      this.#controller.editUserPw
    );
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}
