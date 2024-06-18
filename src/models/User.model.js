import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please add your full name"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
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
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("User", userSchema);

export default user;
