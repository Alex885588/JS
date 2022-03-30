const citiesRepository = require("./cities.repository");
const NotFoundError = require("../homework_2/errors/not-found.error");

module.exports = {
  async getCityByZipCode(zipCode) {
    try{
        const str = await citiesRepository.getCityDataByZipCode(zipCode);
        return str;
    }
    catch{
        throw new NotFoundError("No cities found!");
    }
},
};
