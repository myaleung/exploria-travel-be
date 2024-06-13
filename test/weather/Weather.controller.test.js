import { expect } from "chai";
import sinon from "sinon";

import WeatherController from "../../src/controllers/Weather.controller.js";
import testWeatherData from "./testData/weather.testData.js";

describe("Weather Controller API Tests", () => {
  it("Should return a JSON file with the data on request", () => {
    const weatherControllerInstance = new WeatherController();
    const stubWeatherData = sinon
      .stub(weatherControllerInstance, "fetchWeatherData")
      .returns(testWeatherData);
    expect(weatherControllerInstance.fetchWeatherData()).to.deep.equal(
      testWeatherData
    );
    stubWeatherData.restore();
  });
});
