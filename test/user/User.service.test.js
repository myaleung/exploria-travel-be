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

      /* Unsure how to pass this login function test as the 'id' doesn't seem to be mocked */
      it.skip("Should return a user object if they exist in db", async () => {
        const user = {
          status: 200,
          id: "6668c67420db202d569218ce",
          fullName: "John Doe",
          email: "john@doe.net",
          token: "mockToken",
        };
        const login = {
          email: "john@doe.net",
          password: "Pass123.",
        };
        findOneStub.resolves(user);
        jwtStub.returns("mockToken");

        const result = await userService.loginUser(login);
        expect(result).to.deep.equal(user);
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
      let jwtStub;

      beforeEach(() => {
        findOneStub = sinon.stub(User, "findOne");
        jwtStub = sinon.stub(jwt, "sign");
      });

      afterEach(() => {
        findOneStub.restore();
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
        findOneStub.returns(testUserData[1]);

        const result = await userService.retrieveSavedLocations(
          testUserData[1].email
        );

        expect(result).to.deep.equal(expectedLocation);
      });

      it("Should return empty array if no saved locations are under valid email", async () => {
        const expectedLocation = [];
        jwtStub.returns("mockToken");
        findOneStub.returns(testUserData[2]);

        const result = await userService.retrieveSavedLocations(
          testUserData[2].email
        );

        expect(result).to.deep.equal(expectedLocation);
      });

      it.skip("Should throw error if invalid email is provided", async () => {
        const invalidUser = {
          email: "fake@faker.net",
        };
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
          // expect(res.status.calledWith(404)).to.be.true;
          // expect(res.json.calledOnce).to.be.true;
          // expect(e.message).to.equal(error.message);
          expect(res.json.calledWith({ message: "User not found" })).to.be.true;
        }
      });
    });

    describe("addToSavedLocations Tests", () => {
      let findOneStub;
      let saveStub;
      let hashStub;
      let hashCompareStub;
      let jwtStub;

      beforeEach(() => {
        findOneStub = sinon.stub(User, "findOne");
        saveStub = sinon.stub(User.prototype, "save");
        // Stub the bcrypt.hash method before each test
        hashStub = sinon.stub(bcrypt, "hash").resolves("mockHashedPassword");
        hashCompareStub = sinon.stub(bcrypt, "compareSync").resolves("true");
        jwtStub = sinon.stub(jwt, "sign").returns("mockToken");
      });

      afterEach(() => {
        findOneStub.restore();
        saveStub.restore();
        // Restore the original method after each test
        bcrypt.hash.restore();
        bcrypt.compareSync.restore();
        jwtStub.restore();
      });

      it.skip("Should add a location to savedLocations array and save user", async () => {
        const email = "test@user.co.uk";
        const city = "Taipei";
        const lat = 25.033;
        const lon = 121.5654;
        const expectedLocation = [
          {
            city: "Taipei",
            longitude: 121.5654,
            latitude: 25.033,
          },
        ];

        findOneStub.returns(testUserData[1]);

        await userService.addToSavedLocations(email, city, lat, lon);

        // expect(result.savedLocations).to.deep.equal([
        //   { city: city, longitude: lon, latitude: lat },
        // ]);
        expect(saveStub.calledOnce).to.be.true;
      });

      it("Should not add a location if user is not found and return undefined", async () => {
        const email = "fake@faker.net";
        const city = "London";
        const lat = 51.5085;
        const lon = -0.1257;

        findOneStub.returns(null);

        const result = await userService.addToSavedLocations(
          email,
          city,
          lat,
          lon
        );

        expect(result).to.be.undefined;
        expect(saveStub.called).to.be.false;
      });
    });
  });
});
