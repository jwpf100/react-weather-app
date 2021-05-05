import { useState, useEffect } from 'react'
import {
  getCurrentLocationLocal,
  getLocationListLocal,
} from '../utils/localstorage'
import { fetchCurrentWeatherData, fetchForecastWeatherData } from '../utils/api'

const FetchLocalData = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({})
  const [forecastWeatherData, setForecastWeatherData] = useState({})
  const [currentSearch, setCurrentSearch] = useState()
  const [searchList, setSearchList] = useState()
  const [loading, setLoading] = useState()

  useEffect(() => {
    let ignore = false
    const fetchLocalData = () => {
      setLoading(true)
      const currentLocation = getCurrentLocationLocal()
      const locationList = getLocationListLocal()
      // setCurrentSearch(currentLocation)
      setSearchList(locationList)
      fetchCurrentWeatherData(
        currentLocation.latInput,
        currentLocation.lonInput,
        currentLocation.cityInput,
        currentLocation.stateInput,
        currentLocation.countryInput,
        '',
        setCurrentWeatherData,
        setCurrentSearch
      )
      fetchForecastWeatherData(
        currentLocation.latInput,
        currentLocation.lonInput,
        currentLocation.cityInput,
        currentLocation.stateInput,
        currentLocation.countryInput,
        '',
        setForecastWeatherData
      )
      setLoading(false)
    }
    fetchLocalData()
    return () => {
      ignore = true
    }
  }, [])

  return {
    currentWeatherData,
    setCurrentWeatherData,
    forecastWeatherData,
    setForecastWeatherData,
    currentSearch,
    setCurrentSearch,
    searchList,
    setSearchList,
    loading,
    setLoading,
  }
}

export default FetchLocalData
