import { Router } from "express";
import WeatherController from "../controllers/Weather.controller.js";

export default class WeatherRoutes {
  #controller;
  #router;
  #routeStartPoint;

  constructor(controller = new WeatherController(), routeStartPoint = "/") {
    this.#controller = controller;
    this.#routeStartPoint = routeStartPoint;
    this.#router = Router();
    this.#initialiseRoutes();
  }

  #initialiseRoutes = () => {
    this.#router.post("/results", this.#controller.fetchWeatherData);
  };

  getRouter = () => {
    return this.#router;
  };

  getRouteStartPoint = () => {
    return this.#routeStartPoint;
  };
}
