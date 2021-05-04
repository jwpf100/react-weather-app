import React, { useState } from 'react'
import '../../scss/custom.scss'
import SearchSection from '../SearchSection'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState('')
  const [forecastWeatherData, setForecastWeatherData] = useState('')

  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      <SearchSection
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastWeatherData={setForecastWeatherData}
      />
      <CurrentForecastDisplay currentWeatherData={currentWeatherData} />
      <SevenDayForecastDisplay forecastWeatherData={forecastWeatherData} />
    </div>
  )
}

export default App
