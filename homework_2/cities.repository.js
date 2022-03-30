const axios = require("axios");

module.exports = {
  async getCityDataByZipCode(zipCode) {
    const response = await axios.get(`https://api.zippopotam.us/us/${zipCode}`);
    const info = response.data;

    return `${info["places"][0]["place name"]}, ${info["places"][0]["state abbreviation"]},${info["country"]}`;
  },
};
