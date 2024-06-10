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
    // Temporary route handling function in lieu of real data!
    // this.#router.get("/", (req, res) => res.end("Getting Todos"));

    this.#router.get("/", this.#controller.getUsers);
    // this.#router.get("/func", this.#controller.getUsersFunc);
    this.#router.post("/", UserValidator.validate(), this.#controller.addUser);
    // this.#router.put(
    //   // :id is store in req.params
    //   "/:id",
    //   UserValidator.validate(),
    //   this.#controller.editUser
    // );
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}
