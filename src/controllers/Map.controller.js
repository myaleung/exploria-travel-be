import MapService from '../services/Map.service.js';

export default class MapController {
  #service;

  constructor(service = new MapService()) {
    this.#service = service;
  }

  fetchMapData = async (req, res) => { 
    try {
      const { location } = req.body.query;
      console.log( location );
      const result = await this.#service.retrieveMapLocation(location);
      return res.status(200).json(result);
    } catch (e) {
      return res.status(500).json({ message: e.message });
    }
  };
}