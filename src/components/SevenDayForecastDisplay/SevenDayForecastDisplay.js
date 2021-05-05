import React from 'react'
import PropTypes from 'prop-types'
import { weatherIconLink } from '../../utils/api'
import ForecastRowDisplay from '../ForecastRowDisplay'
import { range } from '../../utils/maths'

const CurrentForecastDisplay = ({ forecastWeatherData }) => {
  return (
    <>
      {Object.keys(forecastWeatherData).length === 0 ? (
        <div />
      ) : (
        <div className="container bg-clear bg-gradient h-100 py-3 mt-3">
          {range(1, 7).map((day) => (
            <ForecastRowDisplay
              key={day}
              forecastWeather={forecastWeatherData.data[day]}
              weatherIconLink={weatherIconLink}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default CurrentForecastDisplay

CurrentForecastDisplay.propTypes = {
  forecastWeatherData: PropTypes.object,
}

CurrentForecastDisplay.defaultProps = {
  forecastWeatherData: {},
}
