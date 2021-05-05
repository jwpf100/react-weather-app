// Model weather object for storage and searching

const createWeatherObject = (currentWeatherData) => {
  const currentLocationObject = {
    latInput: currentWeatherData.data[0].lat,
    lonInput: currentWeatherData.data[0].lon,
    cityInput: currentWeatherData.data[0].city_name,
    stateInput: currentWeatherData.data[0].state_code,
    countryInput: currentWeatherData.data[0].country_code,
    uniqueID: `${currentWeatherData.data[0].city_name},${currentWeatherData.data[0].state_code},${currentWeatherData.data[0].country_code}`,
  }
  return currentLocationObject
}

export { createWeatherObject }
