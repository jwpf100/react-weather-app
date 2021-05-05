import React from 'react'
import PropTypes from 'prop-types'

const SearchRadioSelection = ({ onChange }) => {
  return (
    <div
      className="d-flex justify-content-center justify-content-md-start align-items-center form-check form-check-inline my-2"
      onChange={onChange}
    >
      <div className="form-check form-check-inline p-0">
        <label htmlFor="cityname" className="">
          City
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="cityname"
            defaultChecked
          />
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label htmlFor="postcode">
          Postcode
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="postcode"
          />
        </label>
      </div>
      <div className="form-check form-check-inline">
        <label htmlFor="latlong">
          Lat/Long
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="latlong"
          />
        </label>
      </div>
    </div>
  )
}

export default SearchRadioSelection

SearchRadioSelection.propTypes = {
  onChange: PropTypes.func,
}

SearchRadioSelection.defaultProps = {
  onChange: () => {},
}
