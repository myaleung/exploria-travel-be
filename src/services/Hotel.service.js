import axios from 'axios';

export default class HotelService {
  getHotels = async (latitude, longitude, checkIn, checkOut) => {
    console.log("getting hotel list", latitude, longitude, checkIn, checkOut);
    const options = {
      method: 'GET',
      url: 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation',
      params: {
        latitude: latitude,
        longitude: longitude,
        checkIn: checkIn,
        checkOut: checkOut,
        currencyCode: 'GBP',
      },
      headers: {
        'x-rapidapi-key': process.env.HOTELS_API_KEY,
        'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      // console.log("response", response, "return", response.data.data.data);
      return response.data.data.data;
    } catch (error) {
      console.error(error);
    }

  }
}