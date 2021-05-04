import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { fetchDummyForecastWeatherData, weatherIconLink } from '../../utils/api'
import ForecastRowDisplay from '../ForecastRowDisplay'
import { range } from '../../utils/maths'

const CurrentForecastDisplay = ({ forecastWeatherData }) => {
  // Set State
  const [forecastWeather, setForecastWeather] = useState(
    fetchDummyForecastWeatherData()
  )

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
                forecastWeather={forecastWeather.data[day]}
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
