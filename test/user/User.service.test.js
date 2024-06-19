import { expect, assert } from "chai";
import supertest from "supertest";
import sinon from "sinon";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../src/models/User.model.js";
import UserService from "../../src/services/User.service.js";
import testUserData from "./testData/user.testData.js";

describe("User Service", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });
  describe("User Account Tests", () => {
    describe("loginUser Tests", () => {
      let findOneStub;
      let hashStub;
      let hashCompareStub;
      let jwtStub;

      beforeEach(() => {
        findOneStub = sinon.stub(User, "findOne");
        // Stub the bcrypt.hash method before each test
        hashStub = sinon.stub(bcrypt, "hash").resolves("mockHashedPassword");
        hashCompareStub = sinon.stub(bcrypt, "compareSync").resolves("true");
        jwtStub = sinon.stub(jwt, "sign");
      });

      afterEach(() => {
        findOneStub.restore();
        // Restore the original method after each test
        bcrypt.hash.restore();
        bcrypt.compareSync.restore();
        jwtStub.restore();
      });

      it("Should call .findOne() on User model", async () => {
        const user = {
          fullName: "John Doe",
          email: "john@doe.net",
          password: "Pass123.",
        };
        findOneStub.resolves(user);

        await userService.loginUser(user.email);
        expect(findOneStub.calledOnce).to.be.true;
      });

      it("Should return a user object if they exist in db", async () => {
        const login = {
          email: "john@doe.net",
          password: "Pass123.",
        };
        findOneStub.resolves(testUserData[3]);
        jwtStub.returns("mockToken");

        const result = await userService.loginUser(login);
        expect(result).to.deep.equal(testUserData[3]);
      });

      it("Should throw error if user does not exist in db", async () => {
        const invalidUser = {
          email: "fake@faker.net",
          password: "SomePassword1",
        };
        const error = new Error(`User with ${invalidUser.email} not found`);
        findOneStub.throws(error);

        try {
          await userService.loginUser(invalidUser);
        } catch (e) {
          expect(e.message).to.equal(error.message);
        }
      });
    });

    describe("addUser Tests", () => {
      let saveStub;

      beforeEach(() => {
        saveStub = sinon.stub(User.prototype, "save");
      });

      afterEach(() => {
        saveStub.restore();
      });

      it("Should call and save user and return result when valid user is added", async () => {
        const newUser = new User({
          fullName: "John Doe",
          email: "john@doe.net",
          password: "password",
        });
        saveStub.returns(newUser);
        const result = await userService.addUser(newUser);
        expect(result).to.equal(newUser);

        saveStub.restore();
      });

      it("Should throw error when invalid user is added", async () => {
        const invalidUser = { fullName: "" };
        const error = new Error("Invalid User");
        saveStub.throws(error);

        try {
          await userService.addUser(invalidUser);
          assert.fail("Expected error was not thrown");
        } catch (e) {
          expect(e.message).to.equal(error.message);
        }
      });
    });

    describe("editUser Tests", () => {
      let updatedData;
      let userID;
      let findOneAndUpdateStub;

      beforeEach(() => {
        updatedData = { password: "NewPass1234!" };
        userID = "6668c55d2680389f3b13a3a6";
        findOneAndUpdateStub = sinon.stub(User, "findOneAndUpdate");
      });

      it("Should call findOneAndUpdate and return updated user when valid user id and updated user is provided", async () => {
        findOneAndUpdateStub.returns(userID);

        const result = await userService.editUserPw(updatedData, userID);
        expect(result).to.equal(userID);

        findOneAndUpdateStub.restore();
      });

      it("Should return null when invalid user id is provided", async () => {
        const id = "";
        findOneAndUpdateStub.returns(null);

        const result = await userService.editUserPw(updatedData, id);
        expect(result).to.equal(null);

        findOneAndUpdateStub.restore();
      });
    });
  });

  describe("Saved Locations Tests", () => {
    describe("retrieveSavedLocations Tests", () => {
      let findOneStub;
      let findByIdStub;
      let jwtStub;

      beforeEach(() => {
        findOneStub = sinon.stub(User, "findOne");
        findByIdStub = sinon.stub(User, "findById");
        jwtStub = sinon.stub(jwt, "sign");
      });

      afterEach(() => {
        findOneStub.restore();
        findByIdStub.restore();
        jwtStub.restore();
      });

      it("Should return saved locations when valid email is provided", async () => {
        const expectedLocation = [
          {
            city: "London",
            longitude: -0.1257,
            latitude: 51.5085,
          },
        ];

        jwtStub.returns("mockToken");
        findByIdStub.returns(testUserData[1]);

        const result = await userService.retrieveSavedLocations(testUserData[1].id);

        expect(result).to.deep.equal(expectedLocation);
      });

      it("Should return empty array if no saved locations are under valid email", async () => {
        const expectedLocation = [];
        jwtStub.returns("mockToken");
        findByIdStub.returns(testUserData[0]);

        const result = await userService.retrieveSavedLocations(testUserData[0].id);

        expect(result).to.deep.equal(expectedLocation);
      });

      it("Should throw error if invalid email is provided", async () => {
        const invalidUserId = "666b4846d9d68c688ab7459e";
        const error = new Error(`User not found`);
        // Mock res object
        const res = {
          status: sinon.stub().returnsThis(),
          json: sinon.stub().returnsThis(),
        };

        findOneStub.throws(error);

        try {
          await userService.retrieveSavedLocations(res);
        } catch (e) {
          expect(res.status.calledWith(404)).to.be.true;
          expect(res.json.calledOnce).to.be.true;
          expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        }
      });
    });

    describe("addToSavedLocations Tests", () => {
      let findByIdStub;
      let saveStub;
      let hashStub;
      let hashCompareStub;
      let jwtStub;

      beforeEach(() => {
        findByIdStub = sinon.stub(User, "findById");
        saveStub = sinon.stub(User.prototype, "save");
        // Stub the bcrypt.hash method before each test
        hashStub = sinon.stub(bcrypt, "hash").resolves("mockHashedPassword");
        hashCompareStub = sinon.stub(bcrypt, "compareSync").resolves("true");
        jwtStub = sinon.stub(jwt, "sign").returns("mockToken");
      });

      afterEach(() => {
        findByIdStub.restore();
        saveStub.restore();
        // Restore the original method after each test
        bcrypt.hash.restore();
        bcrypt.compareSync.restore();
        jwtStub.restore();
      });

      it("Should check if location exists in array", async () => {
        const city = "Taipei";
        const lat = 25.033;
        const lon = 121.5654;

        findByIdStub.returns(testUserData[2]);

        const result = await userService.checkLocationExists(testUserData[2], city, lat, lon);

        expect(result.user).to.equal(testUserData[2]);
        expect(result.locationExists).to.be.true;
      });

      it("Should throw error if invalid user is provided", async () => {
        const city = "Taipei";
        const lat = 25.033;
        const lon = 121.5654;
        const error = new Error("User not found");

        findByIdStub.throws(error);

        try {
          await userService.checkLocationExists(testUserData[0], city, lat, lon);
        } catch (e) {
          expect(e.message).to.equal(error.message);
        }
      });
    });
  });
});
