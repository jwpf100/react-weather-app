import React from 'react'
import PropTypes from 'prop-types'
import { weatherIconLink } from '../../utils/api'
import ForecastRowDisplay from '../ForecastRowDisplay'
import { range } from '../../utils/maths'

const CurrentForecastDisplay = ({ forecastWeatherData }) => {
  console.log(forecastWeatherData)
  return (
    <>
      {Object.keys(forecastWeatherData).length === 0 ? (
        <div>Loading</div>
      ) : (
        <div>
          <div className="container border">
            <h4 className="text-center">Seven Day Forecast</h4>
            {range(1, 7).map((day) => (
              <ForecastRowDisplay
                key={day}
                forecastWeather={forecastWeatherData.data[day]}
                weatherIconLink={weatherIconLink}
              />
            ))}
          </div>
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
