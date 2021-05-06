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
    <div className="bg-clear-dark bg-gradient">
      {currentSearch === undefined && <MainHeading>Weather</MainHeading>}

      <div className="container">
        <SearchSection
          setCurrentWeatherData={setCurrentWeatherData}
          setForecastWeatherData={setForecastWeatherData}
          setCurrentSearch={setCurrentSearch}
          setSearchList={setSearchList}
        />
      </div>
      <div className="container d-md-flex">
        <div className="col-12 col-md-6">
          <CurrentForecastDisplay
            currentWeatherData={currentWeatherData}
            searchList={searchList}
            setSearchList={setSearchList}
          />
        </div>
        <div className="col-12 col-md-6">
          <SevenDayForecastDisplay forecastWeatherData={forecastWeatherData} />
        </div>
      </div>
      <div className="container">
        <SavedSearchDisplay
          searchList={searchList}
          setCurrentWeatherData={setCurrentWeatherData}
          setForecastWeatherData={setForecastWeatherData}
          setCurrentSearch={setCurrentSearch}
          setSearchList={setSearchList}
        />
      </div>
    </div>
  )
}

export default App
