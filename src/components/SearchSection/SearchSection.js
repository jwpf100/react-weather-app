import React, { useState } from 'react'
import SearchCitySection from '../SearchCitySection'
import SearchPostcodeSection from '../SearchPostcodeSection'
import SearchLatLonSection from '../SearchLatLonSection'

const SearchSection = () => {
  const [searchCity, setSearchCity] = useState()
  const [searchCountry, setSearchCountry] = useState()
  const [searchPostcode, setSearchPostcode] = useState()
  const [searchLat, setSearchLat] = useState()
  const [searchLon, setSearchLon] = useState()

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    console.log(searchCity, searchCountry)
    console.log(searchPostcode, searchCountry)
    console.log(searchLat, searchLon)
    setSearchCity('')
    setSearchPostcode('')
    setSearchCountry('')
    setSearchLat('')
    setSearchLon('')
  }

  const handleRadioSelectionChange = (e) => console.log(e.target.id)

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <SearchCitySection
          searchCity={searchCity}
          setSearchCity={setSearchCity}
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
        />
        <SearchPostcodeSection
          searchPostcode={searchPostcode}
          setSearchPostcode={setSearchPostcode}
          searchCountry={searchCountry}
          setSearchCountry={setSearchCountry}
        />
        <SearchLatLonSection
          searchLat={searchLat}
          setSearchLat={setSearchLat}
          searchLon={searchLon}
          setSearchLon={setSearchLon}
        />
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
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="cityname"
          />
          City Name
        </div>
        <div className="p-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="postcode"
          />
          Postcode
        </div>

        <div className="p-3">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="latlong"
          />
          Latitude & Longitude
        </div>
      </div>
    </>
  )
}

export default SearchSection
