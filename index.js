import Config from "./src/db/db.config.js";
import Database from "./src/db/database.js";
import Server from "./src/server/server.js";
import Router from "./src/routes/Router.routes.js";
import HotelRoutes from "./src/routes/Hotel.routes.js";
import UserRoutes from "./src/routes/User.routes.js";
import WeatherRoutes from "./src/routes/Weather.routes.js";

Config.load();
const { PORT, HOST, DB_URI } = process.env;

const router = new Router();
const hotelRoutes = new HotelRoutes();
const userRoutes = new UserRoutes();
const weatherRoutes = new WeatherRoutes();
router.addRouter(hotelRoutes);
router.addRouter(userRoutes);
router.addRouter(weatherRoutes);
const server = new Server(PORT, HOST, router);
const database = new Database(DB_URI);

server.start();
await database.connect();
