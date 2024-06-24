import User from "../models/User.model.js";

export default class UserService {
  loginUser = async (body) => {
    try {
      const user = await User.findOne({ email: body.email });
      return user;
    } catch (e) {
      return { status: 500, message: e.message };
    }
  };

  getUser = async (id) => {
    try {
      return await User.findById(id);
    } catch (e) {
      return { status: 500, message: e.message };
    }
  };

  addUser = async (userDetails) => {
    try {
      const user = new User(userDetails);
      return await user.save();
    } catch (e) {
      throw new Error("Invalid User");
    }
  };

  editUserPw = async (updatedPw, id) => {
    return await User.findOneAndUpdate({ _id: id }, updatedPw, {
      new: true,
    });
  };

  retrieveSavedLocations = async (id) => {
    try {
      const validUser = await User.findById(id);

      if (validUser) {
        return validUser.savedLocations;
      }
    } catch (e) {
      throw new Error("User not found");
    }
  };

  addToSavedLocations = async (user, city, lat, lon) => {
    try {
      user.savedLocations.push({ city: city, longitude: lon, latitude: lat });
      return await user.save();
    } catch (e) {
      throw new Error(e.message);
    }
  };

  checkLocationExists = async (id, city, lat, lon) => {
    try {
      const user = await User.findById(id);
      if (user) {
        //check if location exists in saved locations
        const locationExists = user.savedLocations.some(
          (location) =>
            location.city === city &&
            location.latitude == lat &&
            location.longitude == lon
        );

        return {user: user, locationExists: locationExists};
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };

  removeFromSavedLocations = async (user, city, lat, lon) => {
    try {
      const newSavedLocations = user.savedLocations.filter((location) => {
        return (
          location.city !== city &&
          location.latitude !== lat &&
          location.longitude !== lon
        );
      });
      user.savedLocations = newSavedLocations;
      return await user.save();
    } catch (e) {
      throw new Error(e.message);
    }
  };
}
