import { Router } from "express";
import HotelController from "../controllers/Hotel.controller.js";

export default class HotelRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new HotelController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/hotels", this.#controller.showHotelResults);
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}
