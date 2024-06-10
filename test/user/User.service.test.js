import { expect } from "chai";
import sinon from "sinon";

import User from "../../src/models/User.model.js";
import UserService from "../../src/services/User.service.js";

describe("User Service", () => {
  let userService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe("addUser Tests", () => {
    it("Should call and save user and return result when valid user is added", async () => {
      const newUser = new User({
        fullName: "John Doe",
        email: "john@doe.net",
        password: "password",
      });
      const saveStub = sinon.stub(User.prototype, "save").returns(newUser);
      const result = await userService.addUser(newUser);
      expect(result).to.equal(newUser);

      saveStub.restore();
    });

    it("Should throw error when invalid user is added", async () => {
      const invalidUser = { fullName: "" };
      const error = new Error("Invalid User");
      const saveStub = sinon.stub(User.prototype, "save");
      saveStub.throws(error);

      try {
        await userService.addUser(invalidUser);
        assert.fail("Expected error was not thrown");
      } catch (e) {
        expect(e).to.equal(error);
      }

      saveStub.restore();
    });
  });

  describe("editUser Tests", () => {
    let updatedUser;
    let findOneAndUpdateStub;

    beforeEach(() => {
      updatedUser = { fullName: "Johnathan Updated" };
      findOneAndUpdateStub = sinon.stub(User, "findOneAndUpdate");
    });

    it("Should call findOneAndUpdate and return updated user when valid user id and updated user is provided", async () => {
      const id = "1";
      findOneAndUpdateStub.returns(updatedUser);

      const result = await userService.editUser(updatedUser, id);
      expect(result).to.equal(updatedUser);

      findOneAndUpdateStub.restore();
    });

    it("Should return null when invalid user id is provided", async () => {
      const id = "";
      findOneAndUpdateStub.returns(null);

      const result = await userService.editUser(updatedUser, id);
      expect(result).to.equal(null);

      findOneAndUpdateStub.restore();
    });
  });
});
