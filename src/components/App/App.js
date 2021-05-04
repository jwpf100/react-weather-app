import React from 'react'
import '../../scss/custom.scss'
import CurrentForecastDisplay from '../CurrentForecastDisplay'

const App = () => {
  return (
    <div>
      <h1> Weather App </h1>
      <CurrentForecastDisplay />
    </div>
  )
}

export default App
