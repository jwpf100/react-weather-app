import React, { useState } from 'react'
import '../../scss/custom.scss'
import SearchSection from '../SearchSection'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'
import SavedSearchDisplay from '../SavedSearchDisplay'

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [forecastWeatherData, setForecastWeatherData] = useState({})
  const [currentSearch, setCurrentSearch] = useState({})
  const [searchList, setSearchList] = useState([])

  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      <SearchSection
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastWeatherData={setForecastWeatherData}
      />
      <CurrentForecastDisplay
        currentWeatherData={currentWeatherData}
        setCurrentSearch={setCurrentSearch}
        searchList={searchList}
        setSearchList={setSearchList}
      />
      <SevenDayForecastDisplay forecastWeatherData={forecastWeatherData} />
      <SavedSearchDisplay
        searchList={searchList}
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastWeatherData={setForecastWeatherData}
        setSearchList={setSearchList}
      />
    </div>
  )
}

export default App
