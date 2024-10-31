import HotelService from "../services/Hotel.service.js";

export default class HotelController {
  #service;

  constructor(service = new HotelService()) {
    this.#service = service;
  }

  showHotelResults = async (req, res) => {
    try {
      console.log("req.body", req.body);
      const response = await this.#service.getHotels(req.body.latitude, req.body.longitude, req.body.checkIn, req.body.checkOut);
      console.log("response", response);
      return res.status(200).json(response);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
}