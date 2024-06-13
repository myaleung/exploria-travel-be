export default class WeatherController {
  constructor() {}

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
