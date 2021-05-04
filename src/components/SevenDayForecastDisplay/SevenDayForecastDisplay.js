import React, { useState } from 'react'
import { fetchForecastWeatherData, weatherIconLink } from '../../utils/api'
import ForecastRowDisplay from '../ForecastRowDisplay'

const CurrentForecastDisplay = () => {
  // Set State
  const [forecastWeather, setForecastWeather] = useState(
    fetchForecastWeatherData()
  )

  return (
    <div>
      <div className="container border">
        <h4 className="text-center">Seven Day Forecast</h4>
        <ForecastRowDisplay
          forecastWeather={forecastWeather.data[0]}
          weatherIconLink={weatherIconLink}
        />
        <ForecastRowDisplay
          forecastWeather={forecastWeather.data[1]}
          weatherIconLink={weatherIconLink}
        />
      </div>
    </div>
  )
}

export default CurrentForecastDisplay
