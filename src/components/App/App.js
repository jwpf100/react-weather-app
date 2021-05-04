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

  // const handleTestButton = () => {
  //   console.log(currentWeatherData)
  //   console.log(forecastWeatherData)
  //   console.log(currentSearch)
  //   console.log(searchList)
  // }

  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      {/* <button
        type="button"
        className="btn btn-primary m-2"
        onClick={handleTestButton}
      >
        Test Array
      </button> */}
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
      />
    </div>
  )
}

export default App
