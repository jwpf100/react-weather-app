import React, { useState } from 'react'
import SearchCitySection from '../SearchCitySection'
import SearchPostcodeSection from '../SearchPostcodeSection'
import SearchLatLonSection from '../SearchLatLonSection'

const SearchSection = () => {
  const [searchCity, setSearchCity] = useState('')
  const [searchCountry, setSearchCountry] = useState('')
  const [searchPostcode, setSearchPostcode] = useState('')
  const [searchLat, setSearchLat] = useState()
  const [searchLon, setSearchLon] = useState()
  const [searchType, setSearchType] = useState('cityname')

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

/* <SearchCitySection
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

        */
