import React from 'react'
import PropTypes from 'prop-types'

const ForecastRowDisplay = ({ forecastWeather, weatherIconLink }) => {
  // Set State

  return (
    <div className="d-flex justify-content-start align-items-center text-start">
      <div className="mx-3 w-25">{forecastWeather.valid_date}</div>
      <div className="d-flex w-75 justify-content-around align-items-center">
        <img
          src={`${weatherIconLink}${forecastWeather.weather.icon}.png`}
          alt={forecastWeather.weather.description}
          width="50px"
          className="mx-2"
        />
        <div className="">{forecastWeather.weather.description}</div>
        <div className="">{`${forecastWeather.max_temp}\u00B0/${forecastWeather.min_temp}\u00B0`}</div>
        <div className="">{`${forecastWeather.precip} mm`}</div>
      </div>
    </div>
  )
}

export default ForecastRowDisplay

ForecastRowDisplay.propTypes = {
  forecastWeather: PropTypes.object,
  weatherIconLink: PropTypes.string,
}

ForecastRowDisplay.defaultProps = {
  forecastWeather: {},
  weatherIconLink: '',
}
