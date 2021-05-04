import React, { useState } from 'react'
import { fetchForecastWeatherData, weatherIconLink } from '../../utils/api'
import ForecastRowDisplay from '../ForecastRowDisplay'
import { range } from '../../utils/maths'

const CurrentForecastDisplay = () => {
  // Set State
  const [forecastWeather, setForecastWeather] = useState(
    fetchForecastWeatherData()
  )

  return (
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
  )
}

export default CurrentForecastDisplay
