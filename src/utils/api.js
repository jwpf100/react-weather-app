import { createWeatherObject } from './data'

// Test Data
const weatherIconLink = 'https://www.weatherbit.io/static/img/icons/'

// API Key for testing
// const APIKey = 'e90f26a7c3564efc8ea5787ca7a6b982'
// API Key
const APIKey = '0777401f3864415cae72a3cee34da032'

// API searched based on inputs from user.  Blank inputs don't impact the API search, although blanks need to be entered from the search section so that an error isn't recieved from the API.

const fetchCurrentWeatherData = async (
  latInput,
  lonInput,
  cityInput,
  stateInput,
  countryInput,
  postcodeInput,
  setCurrentWeatherData,
  setCurrentSearch
) => {
  const latInputCheck = latInput === undefined ? '' : latInput
  const lonInputCheck = lonInput === undefined ? '' : lonInput

  const requestCurrentData = `https://api.weatherbit.io/v2.0/current?lat=${latInputCheck}&lon=${lonInputCheck}&city=${cityInput}&postal_code=${postcodeInput}&state=${stateInput}&country=${countryInput}&key=${APIKey}&include=minutely`

  const currentWeatherData = await fetch(requestCurrentData).then((response) =>
    response.json()
  )
  // set State in the main app
  setCurrentWeatherData(currentWeatherData)
  const currentLocationObject = createWeatherObject(currentWeatherData)
  setCurrentSearch(currentLocationObject)
}

// API searched based on inputs from user.  Blank inputs don't impact the API search, although blanks need to be entered from the search section so that an error isn't recieved from the API.

const fetchForecastWeatherData = async (
  latInput,
  lonInput,
  cityInput,
  stateInput,
  countryInput,
  postcodeInput,
  setForecastWeatherData
) => {
  const latInputCheck = latInput === undefined ? '' : latInput
  const lonInputCheck = lonInput === undefined ? '' : lonInput

  const requestForecastData = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${latInputCheck}&lon=${lonInputCheck}&city=${cityInput}&postal_code=${postcodeInput}&state=${stateInput}&country=${countryInput}&key=${APIKey}&include=minutely`

  const forecastData = await fetch(requestForecastData).then((response) =>
    response.json()
  )
  // set State in the main app
  setForecastWeatherData(forecastData)
}

export { fetchCurrentWeatherData, fetchForecastWeatherData, weatherIconLink }
