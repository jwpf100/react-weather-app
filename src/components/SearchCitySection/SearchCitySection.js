import React from 'react'
import PropTypes from 'prop-types'
import SearchTextInput from '../SearchTextInput'

const SearchCitySection = ({
  searchCity,
  setSearchCity,
  searchCountry,
  setSearchCountry,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
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
      </div>
    </>
  )
}

export default SearchCitySection

SearchCitySection.propTypes = {
  searchCity: PropTypes.string,
  setSearchCity: PropTypes.func,
  searchCountry: PropTypes.string,
  setSearchCountry: PropTypes.func,
}

SearchCitySection.defaultProps = {
  searchCity: '',
  setSearchCity: () => {},
  searchCountry: '',
  setSearchCountry: () => {},
}
