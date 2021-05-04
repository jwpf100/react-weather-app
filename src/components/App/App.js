import React from 'react'
import '../../scss/custom.scss'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'

const App = () => {
  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      <CurrentForecastDisplay />
      <SevenDayForecastDisplay />
    </div>
  )
}

export default App
