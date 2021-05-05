import React, { useEffect } from 'react'
import '../../scss/custom.scss'
import SearchSection from '../SearchSection'
import CurrentForecastDisplay from '../CurrentForecastDisplay'
import SevenDayForecastDisplay from '../SevenDayForecastDisplay'
import SavedSearchDisplay from '../SavedSearchDisplay'
import {
  storeCurrentLocationLocal,
  storeLocationListLocal,
} from '../../utils/localstorage'
import FetchLocalData from '../../hooks/FetchLocalData'
import MainHeading from '../Display/MainHeading'

const App = () => {
  const {
    currentWeatherData,
    setCurrentWeatherData,
    forecastWeatherData,
    setForecastWeatherData,
    currentSearch,
    setCurrentSearch,
    searchList,
    setSearchList,
    loading,
  } = FetchLocalData()

  // Use side effect to push current search to local storage when the state changes

  useEffect(() => {
    if (!loading || Object.keys(currentSearch).length !== 0) {
      storeCurrentLocationLocal(currentSearch)
    }
  }, [currentSearch])

  // Use side effect to push searchList to local storage when the state changes

  useEffect(() => {
    if (
      !loading ||
      searchList.length !== 0 ||
      searchList === null ||
      searchList === 'undefined'
    ) {
      storeLocationListLocal(searchList)
    }
  }, [searchList])

  return (
    <div className="bg-clear bg-gradient">
      <MainHeading>Weather App</MainHeading>
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
        setCurrentSearch={setCurrentSearch}
        setSearchList={setSearchList}
      />
    </div>
  )
}

export default App
