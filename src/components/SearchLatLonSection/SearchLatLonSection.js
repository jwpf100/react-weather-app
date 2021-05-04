import React from 'react'
import PropTypes from 'prop-types'
import SearchTextInput from '../SearchTextInput'

const SearchLatLonSection = ({
  searchLat,
  setSearchLat,
  searchLon,
  setSearchLon,
}) => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
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
      </div>
    </>
  )
}

export default SearchLatLonSection

SearchLatLonSection.propTypes = {
  searchLat: PropTypes.string,
  setSearchLat: PropTypes.func,
  searchLon: PropTypes.string,
  setSearchLon: PropTypes.func,
}

SearchLatLonSection.defaultProps = {
  searchLat: '',
  setSearchLat: () => {},
  searchLon: '',
  setSearchLon: () => {},
}
