export default class WeatherController {
  fetchWeatherData = async (req, res) => {
    try {
      let longitude;
      let latitude;

      if (req.body.query) {
        const locationAPI = `http://api.openweathermap.org/geo/1.0/direct?q=${req.body.query}&limit=1&appid=${process.env.WEATHER_API_KEY}`;
        const locationResponse = await fetch(locationAPI);
        const locationResponseData = await locationResponse.json();
        if (locationResponseData.length < 1) {
          return res.status(404).json({ message: "Location not found" });
        }
        latitude = locationResponseData[0].lat;
        longitude = locationResponseData[0].lon;
      }
      if (req.body.lat && req.body.lon) {
        latitude = req.body.lat;
        longitude = req.body.lon;
      }
      const weatherForecastAPI = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${process.env.WEATHER_API_KEY}`;
      const weatherForecastResponse = await fetch(weatherForecastAPI);
      const weatherForecastResponseData = await weatherForecastResponse.json();
      return res.status(200).json(weatherForecastResponseData);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
}
