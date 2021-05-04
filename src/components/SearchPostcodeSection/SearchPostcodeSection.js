import React from 'react'
import PropTypes from 'prop-types'
import SearchTextInput from '../SearchTextInput'

const SearchPostcodeSection = ({
  searchPostcode,
  setSearchPostcode,
  searchCountry,
  setSearchCountry,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
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
      </div>
    </>
  )
}

export default SearchPostcodeSection

SearchPostcodeSection.propTypes = {
  searchPostcode: PropTypes.string,
  setSearchPostcode: PropTypes.func,
  searchCountry: PropTypes.string,
  setSearchCountry: PropTypes.func,
}

SearchPostcodeSection.defaultProps = {
  searchPostcode: '',
  setSearchPostcode: () => {},
  searchCountry: '',
  setSearchCountry: () => {},
}
