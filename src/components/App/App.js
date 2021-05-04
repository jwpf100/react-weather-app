import React, { useState } from 'react'
import '../../scss/custom.scss'
import SearchSection from '../SearchSection'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState('')

  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      <SearchSection setCurrentWeatherData={setCurrentWeatherData} />
      <CurrentForecastDisplay currentWeatherData={currentWeatherData} />
      <SevenDayForecastDisplay />
    </div>
  )
}

export default App
