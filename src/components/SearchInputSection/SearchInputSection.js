import React from 'react'
import PropTypes from 'prop-types'
import SearchTextInput from '../SearchTextInput'

const SearchInputSection = ({
  searchType,
  searchCity,
  setSearchCity,
  searchCountry,
  setSearchCountry,
  searchPostcode,
  setSearchPostcode,
  searchLat,
  setSearchLat,
  searchLon,
  setSearchLon,
}) => {
  // Set searchType state based on radio button selected.  This will display the relvant search section.

  return (
    <>
      {searchType === 'cityname' && (
        <>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              className=""
              search={searchCity}
              setSearch={setSearchCity}
              placeholder="City"
            />
          </div>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              search={searchCountry}
              setSearch={setSearchCountry}
              placeholder="Country (Optional)"
            />
          </div>
        </>
      )}
      {searchType === 'postcode' && (
        <>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              search={searchPostcode}
              setSearch={setSearchPostcode}
              placeholder="Postcode"
            />
          </div>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              search={searchCountry}
              setSearch={setSearchCountry}
              placeholder="Country (Optional)"
            />
          </div>
        </>
      )}
      {searchType === 'latlong' && (
        <>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              search={searchLat}
              setSearch={setSearchLat}
              placeholder="Latitude"
            />
          </div>
          <div className="col-12 col-md-6 pb-1 pb-md-0 pe-md-1">
            <SearchTextInput
              search={searchLon}
              setSearch={setSearchLon}
              placeholder="Longitude"
            />
          </div>
        </>
      )}
    </>
  )
}

export default SearchInputSection

SearchInputSection.propTypes = {
  searchType: PropTypes.string,
  searchCity: PropTypes.string,
  setSearchCity: PropTypes.func,
  searchCountry: PropTypes.string,
  setSearchCountry: PropTypes.func,
  searchPostcode: PropTypes.string,
  setSearchPostcode: PropTypes.func,
  searchLat: PropTypes.number,
  setSearchLat: PropTypes.func,
  searchLon: PropTypes.number,
  setSearchLon: PropTypes.func,
}

SearchInputSection.defaultProps = {
  searchType: '',
  searchCity: '',
  setSearchCity: () => {},
  searchCountry: '',
  setSearchCountry: () => {},
  searchPostcode: '',
  setSearchPostcode: () => {},
  searchLat: '',
  setSearchLat: () => {},
  searchLon: '',
  setSearchLon: () => {},
}
