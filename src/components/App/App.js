import React, { useEffect, useState } from 'react'
import '../../scss/custom.scss'
import SearchSection from '../SearchSection'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'
import SavedSearchDisplay from '../SavedSearchDisplay'
import {
  storeCurrentLocationLocal,
  storeLocationListLocal,
} from '../../utils/localstorage'

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [forecastWeatherData, setForecastWeatherData] = useState({})
  const [currentSearch, setCurrentSearch] = useState({})
  const [searchList, setSearchList] = useState([])

  // Use side effect to push current search to local storage when the state changes

  useEffect(() => {
    if (Object.keys(currentSearch).length !== 0) {
      console.log('use effect current search')
      storeCurrentLocationLocal(currentSearch)
    }
  }, [currentSearch])

  // Use side effect to push searchList to local storage when the state changes

  useEffect(() => {
    if (searchList.length !== 0) {
      console.log('use effect searchList')
      storeLocationListLocal(searchList)
    }
  }, [searchList])

  return (
    <div>
      <h1 className="text-center"> Weather App </h1>
      <SearchSection
        setCurrentWeatherData={setCurrentWeatherData}
        setForecastWeatherData={setForecastWeatherData}
        setCurrentSearch={setCurrentSearch}
        setSearchList={setSearchList}
      />
      <CurrentForecastDisplay
        currentWeatherData={currentWeatherData}
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
