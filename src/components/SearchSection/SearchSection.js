import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchTextInput from '../SearchTextInput'
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from '../../utils/api'

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
    setSearchLat('')
    setSearchLon('')
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
      <h5>Please enter a search below:</h5>
      <div className="d-flex flex-wrap justify-content-center align-items-center pt-2">
        {searchType === 'cityname' && (
          <>
            <SearchTextInput
              className=""
              search={searchCity}
              setSearch={setSearchCity}
              placeholder="City"
            />
            <SearchTextInput
              search={searchCountry}
              setSearch={setSearchCountry}
              placeholder="Country (Optional)"
            />
          </>
        )}
        {searchType === 'postcode' && (
          <>
            <SearchTextInput
              search={searchPostcode}
              setSearch={setSearchPostcode}
              placeholder="Postcode"
            />
            <SearchTextInput
              search={searchCountry}
              setSearch={setSearchCountry}
              placeholder="Country (Optional)"
            />
          </>
        )}
        {searchType === 'latlong' && (
          <>
            <SearchTextInput
              search={searchLat}
              setSearch={setSearchLat}
              placeholder="Latitude"
            />
            <SearchTextInput
              search={searchLon}
              setSearch={setSearchLon}
              placeholder="Longitude"
            />
          </>
        )}

        <div className="d-flex col-12 col-md-3 justify-content-center align-items-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <div
        className="d-flex justify-content-center align-items-center form-check"
        onChange={handleRadioSelectionChange}
      >
        <div className="p-3">
          <label htmlFor="cityname" className="">
            City Name
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="cityname"
              defaultChecked
            />
          </label>
        </div>
        <div className="p-3">
          <label htmlFor="postcode">
            Postcode
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="postcode"
            />
          </label>
        </div>

        <div className="p-3">
          <label htmlFor="latlong">
            Latitude & Longitude
            <input
              className="form-check-input mx-1"
              type="radio"
              name="flexRadioDefault"
              id="latlong"
            />
          </label>
        </div>
      </div>
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
