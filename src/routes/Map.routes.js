import { Router } from "express";
import MapController from "../controllers/Map.controller.js";

export default class MapRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new MapController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/results", this.#controller.fetchMapData);
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}