import React, { useState } from 'react'
import PropTypes from 'prop-types'
import RegularButton from '../RegularButton'
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from '../../utils/api'
import SearchInputSection from '../SearchInputSection'
import SearchRadioSection from '../SearchRadioSection'

const SearchSection = ({
  setCurrentWeatherData,
  setForecastWeatherData,
  setCurrentSearch,
}) => {
  const [searchCity, setSearchCity] = useState('')
  const [searchAltState, setAltState] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const [searchPostcode, setSearchPostcode] = useState('')
  const [searchLat, setSearchLat] = useState()
  const [searchLon, setSearchLon] = useState()
  const [searchType, setSearchType] = useState('cityname')

  // Reset all search states.  This will also clear search input areas.

  const clearSearchInputs = () => {
    setSearchCity('')
    setSearchPostcode('')
    setSearchCountry('')
    setSearchLat()
    setSearchLon()
  }

  // Handle the search submit button

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    // Temporary fix.  Ensure that empty searches can't go to the API.  Validation needs to be added to prevent the error.
    if (!searchCity && !searchPostcode) {
      if (!searchLat || !searchLon) {
        return alert(
          'Please enter a city, postcode or latitude & longitude to search.  Thanks!'
        )
      }
    }
    fetchCurrentWeatherData(
      searchLat,
      searchLon,
      searchCity,
      searchAltState,
      searchCountry,
      searchPostcode,
      setCurrentWeatherData,
      setCurrentSearch
    )
    fetchForecastWeatherData(
      searchLat,
      searchLon,
      searchCity,
      searchAltState,
      searchCountry,
      searchPostcode,
      setForecastWeatherData
    )
    clearSearchInputs()
    return null
  }

  // Set searchType state based on radio button selected.  This will display the relvant search section.

  const handleRadioSelectionChange = (e) => setSearchType(e.target.id)

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {/* Outputs text inputs depending on which redio button selected */}
        <div className="d-flex flex-wrap col-9 col-md-9 pe-2">
          <SearchInputSection
            searchType={searchType}
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
            searchPostcode={searchPostcode}
            setSearchPostcode={setSearchPostcode}
            searchLat={searchLat}
            setSearchLat={setSearchLat}
            searchLon={searchLon}
            setSearchLon={setSearchLon}
          />
        </div>
        <div className="d-flex col-3 col-md-3 justify-content-center align-items-center ps-1">
          <RegularButton onClick={handleSearchSubmit}>Search</RegularButton>
        </div>
      </div>
      <SearchRadioSection onChange={handleRadioSelectionChange} />
    </div>
  )
}

export default SearchSection

SearchSection.propTypes = {
  setCurrentWeatherData: PropTypes.func,
  setForecastWeatherData: PropTypes.func,
  setCurrentSearch: PropTypes.func,
}

SearchSection.defaultProps = {
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
  setCurrentSearch: () => {},
}
