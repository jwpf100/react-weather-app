import React, { useState } from 'react'
import { fetchCurrentWeatherData } from '../../utils/api'

const CurrentForecastDisplay = () => {
  // Set State
  const [currentWeather, setCurrentWeather] = useState(
    fetchCurrentWeatherData()
  )

  return (
    <div>
      <h1>Hello Forecast Display</h1>
      <div className="container border">
        <h2>{`${currentWeather.data[0].city_name} `}</h2>
        <h4>{`(${currentWeather.data[0].country_code})`}</h4>
        <p>{`(Lat: ${currentWeather.data[0].lat} Lon: ${currentWeather.data[0].lon})`}</p>
        <h4>Current Weather</h4>
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

/* City Name
Country
Lat and Lon
Current Weather
Image of Weather
Description of Weather
Sunrise
Sunset
Temperature
Wind Speed/Direction
Precipitation */
