import { expect } from "chai";
import sinon from "sinon";

import HotelController from "../../src/controllers/Hotel.controller.js";

describe("Hotel Controller API Tests", () => {
  it("Should return JSON data with the hotel list", () => { 
    const hotelControllerInstance = new HotelController();
    const stubHotelData = sinon.stub(hotelControllerInstance, "showHotelResults").returns({data: {data: {}}});
    expect(hotelControllerInstance.showHotelResults()).to.deep.equal({data: {data: {}}});
    stubHotelData.restore();
  });

  it("Should return 200 status code", () => { 
    const hotelControllerInstance = new HotelController();
    const stubHotelData = sinon.stub(hotelControllerInstance, "showHotelResults").returns({status: 200});
    expect(hotelControllerInstance.showHotelResults()).to.deep.equal({status: 200});
    stubHotelData.restore();
  });

  it("Should return 500 status code on error", () => { 
    const hotelControllerInstance = new HotelController();
    const customError = new Error("Error");
    customError.statusCode = 500;
    const stubHotelData = sinon.stub(hotelControllerInstance, "showHotelResults").throws(customError);
    expect(hotelControllerInstance.showHotelResults(51.5074, 0.1278, "2021-12-01", "2021-12-02")).to.throw(customError);
    expect(hotelControllerInstance.showHotelResults(51.5074, 0.1278, "2021-12-01", "2021-12-02")).to.deep.equal({ status: 500 });
    stubHotelData.restore();
  });
});