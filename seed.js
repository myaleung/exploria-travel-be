import User from "./src/models/User.model.js";
import mongoose from "mongoose";
import Config from "./src/db/db.config.js";
import Database from "./src/db/database.js";

Config.load();
const { DB_URI } = process.env;
const database = new Database(DB_URI);
//create array of user/s.
const users = [
  new User({
    fullName: "Sam White",
    email: "samwhite@gmail.com",
    password: "Password123$",
    role: "user",
  }),
];
await database.connect();
//save data.
//after all items are seeded, disconnect automatically
users.map(async (user, index) => {
  await user.save();
  if (index === users.length - 1) {
    console.log("DONE!");
    mongoose.disconnect();
  }
});
