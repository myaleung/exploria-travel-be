import { expect, assert } from "chai";
import sinon from "sinon";

import HotelService from "../../src/services/Hotel.service.js";

describe("Hotel Service API Tests", () => {
  it("Should accept parameters and return JSON data with the hotel list", () => { 
    const hotelServiceInstance = new HotelService();
    const stubHotelData = sinon.stub(hotelServiceInstance, "getHotels").returns({ data: { data: {} } });
    expect(hotelServiceInstance.getHotels(51.5074, 0.1278, "2021-12-01", "2021-12-02")).to.deep.equal({ data: { data: {} } });
    stubHotelData.restore();
  });

  it("Should return an error message", () => { 
    const hotelServiceInstance = new HotelService();
    const stubHotelData = sinon.stub(hotelServiceInstance, "getHotels").throws("Error");
    assert.throws(() => hotelServiceInstance.getHotels(), Error);
    stubHotelData.restore();
  });

  
});