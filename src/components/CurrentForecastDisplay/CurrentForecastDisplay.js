import React from 'react'
import PropTypes from 'prop-types'
import { weatherIconLink } from '../../utils/api'

const CurrentForecastDisplay = ({ currentWeatherData }) => {
  return (
    <>
      {!currentWeatherData ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="container border text-center">
            <h2 className="d-inline">{`${currentWeatherData.data[0].city_name} `}</h2>
            <h4 className="d-inline">{`(${currentWeatherData.data[0].country_code})`}</h4>
            <p>{`(Lat: ${currentWeatherData.data[0].lat} Lon: ${currentWeatherData.data[0].lon})`}</p>
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
  currentWeatherData: PropTypes.string,
}

CurrentForecastDisplay.defaultProps = {
  currentWeatherData: '',
}
