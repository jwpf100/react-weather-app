import React, { useState } from 'react'
import { fetchCurrentWeatherData, weatherIconLink } from '../../utils/api'

const CurrentForecastDisplay = () => {
  // Set State
  const [currentWeather, setCurrentWeather] = useState(
    fetchCurrentWeatherData()
  )

  return (
    <div>
      <div className="container border text-center">
        <h2 className="d-inline">{`${currentWeather.data[0].city_name} `}</h2>
        <h4 className="d-inline">{`(${currentWeather.data[0].country_code})`}</h4>
        <p>{`(Lat: ${currentWeather.data[0].lat} Lon: ${currentWeather.data[0].lon})`}</p>
        <h4>Current Weather</h4>
        <img
          src={`${weatherIconLink}${currentWeather.data[0].weather.icon}.png`}
          alt={currentWeather.data[0].weather.description}
        />
        <p>{`${currentWeather.data[0].weather.description}`}</p>
        <p>{`Sunrise: ${currentWeather.data[0].sunrise} Sunset: ${currentWeather.data[0].sunset}`}</p>
        <p>{`Temperature: ${currentWeather.data[0].temp}`}</p>
        <p>{`Windspeed: ${currentWeather.data[0].wind_spd} Direction: ${currentWeather.data[0].wind_dir}`}</p>
        <p>{`Precipitation: ${currentWeather.data[0].precip}`}</p>
      </div>
    </div>
  )
}

export default CurrentForecastDisplay
