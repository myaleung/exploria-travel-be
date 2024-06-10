import cors from "cors";
import Config from "./src/db/db.config.js";
import Database from "./src/db/database.js";
import Server from "./src/server/server.js";
import UserRoutes from "./src/routes/User.routes.js";

Config.load();
const { PORT, HOST, DB_URI } = process.env;

const userRoutes = new UserRoutes();
const server = new Server(PORT, HOST, userRoutes);
const database = new Database(DB_URI);

server.start();
await database.connect();
