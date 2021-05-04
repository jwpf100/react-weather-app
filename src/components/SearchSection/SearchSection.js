import React, { useState } from 'react'
import SearchCitySection from '../SearchCitySection'

const SearchSection = () => {
  const [searchTerm, setSearchTerm] = useState()

  const handleSearchTermInput = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleSearchSubmit = () => {
    console.log(searchTerm)
  }

  const handleRadioSelectionChange = (e) => console.log(e.target.id)

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <SearchCitySection />
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
          {' '}
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
