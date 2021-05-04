import React, { useState } from 'react'
import PropTypes from 'prop-types'
import SearchCitySection from '../SearchCitySection'
import SearchPostcodeSection from '../SearchPostcodeSection'
import SearchLatLonSection from '../SearchLatLonSection'
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from '../../utils/api'

const SearchSection = ({ setCurrentWeatherData, setForecastWeatherData }) => {
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
    fetchCurrentWeatherData(
      searchLat,
      searchLon,
      searchCity,
      searchAltState,
      searchCountry,
      searchPostcode,
      setCurrentWeatherData
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
  }

  // Set searchType state based on radio button selected.  This will display the relvant search section.

  const handleRadioSelectionChange = (e) => setSearchType(e.target.id)

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        {searchType === 'cityname' && (
          <SearchCitySection
            searchCity={searchCity}
            setSearchCity={setSearchCity}
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
          />
        )}
        {searchType === 'postcode' && (
          <SearchPostcodeSection
            searchPostcode={searchPostcode}
            setSearchPostcode={setSearchPostcode}
            searchCountry={searchCountry}
            setSearchCountry={setSearchCountry}
          />
        )}
        {searchType === 'latlong' && (
          <SearchLatLonSection
            searchLat={searchLat}
            setSearchLat={setSearchLat}
            searchLon={searchLon}
            setSearchLon={setSearchLon}
          />
        )}
        <button
          type="button"
          className="btn btn-light m-2"
          onClick={handleSearchSubmit}
        >
          Search
        </button>
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
    </>
  )
}

export default SearchSection

SearchSection.propTypes = {
  setCurrentWeatherData: PropTypes.func,
  setForecastWeatherData: PropTypes.func,
}

SearchSection.defaultProps = {
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
}
