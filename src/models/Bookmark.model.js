import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    city: {
      type: String,
    },
    longitude: {
      type: String,
    },
    latitude: {
      type: String,
    },
  },
});

const favourite = mongoose.model("favourite", bookmarkSchema);
export default user;
