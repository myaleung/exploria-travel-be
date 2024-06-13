import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  savedLocations: [
    {
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
  ],
});

const user = mongoose.model("User", userSchema);

export default user;
