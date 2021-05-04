import React from 'react'
import PropTypes from 'prop-types'
import { weatherIconLink } from '../../utils/api'

const CurrentForecastDisplay = ({
  currentWeatherData,
  setCurrentSearch,
  searchList,
  setSearchList,
}) => {
  const handleSaveSearch = () => {
    // On save, create an object storing the current location.  Store that in state, and add to list of saved searches.
    const currentLocationObject = {
      latInput: currentWeatherData.data[0].lat,
      lonInput: currentWeatherData.data[0].lon,
      cityInput: currentWeatherData.data[0].city_name,
      stateInput: currentWeatherData.data[0].state_code,
      countryInput: currentWeatherData.data[0].country_code,
    }
    setCurrentSearch(currentLocationObject)
    setSearchList([...searchList, currentLocationObject])
  }

  return (
    <>
      {Object.keys(currentWeatherData).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="container border d-flex">
            <div className="offset-3 col-6 text-center">
              <h2 className="d-inline-block">{`${currentWeatherData.data[0].city_name} `}</h2>
              <h4 className="d-inline-block">{`(${currentWeatherData.data[0].country_code})`}</h4>
              <p>{`(Lat: ${currentWeatherData.data[0].lat} Lon: ${currentWeatherData.data[0].lon})`}</p>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={handleSaveSearch}
              >
                Save
              </button>
            </div>
          </div>
          <div className="container border text-center">
            <h4>Current Weather</h4>
            <img
              src={`${weatherIconLink}${currentWeatherData.data[0].weather.icon}.png`}
              alt={currentWeatherData.data[0].weather.description}
            />
            <p>{`${currentWeatherData.data[0].weather.description}`}</p>
            <p>{`Sunrise: ${currentWeatherData.data[0].sunrise} Sunset: ${currentWeatherData.data[0].sunset}`}</p>
            <p>{`Temperature: ${currentWeatherData.data[0].temp}`}</p>
            <p>{`Windspeed: ${currentWeatherData.data[0].wind_spd} Direction: ${currentWeatherData.data[0].wind_dir}`}</p>
            <p>{`Precipitation: ${currentWeatherData.data[0].precip}`}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default CurrentForecastDisplay

CurrentForecastDisplay.propTypes = {
  currentWeatherData: PropTypes.object,
  setCurrentSearch: PropTypes.func,
  searchList: PropTypes.array,
  setSearchList: PropTypes.func,
}

CurrentForecastDisplay.defaultProps = {
  currentWeatherData: {},
  setCurrentSearch: () => {},
  searchList: [],
  setSearchList: () => {},
}
