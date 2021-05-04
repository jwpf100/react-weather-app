import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'

const SavedSearchList = ({ className, cityName, countryName }) => {
  const handleShowSavedSearch = () => {}
  const handleDeleteSearch = () => {}

  return (
    <div
      className={[
        'd-flex justify-content-start align-items-center text-start',
        className,
      ].join(' ')}
    >
      <div className="px-3 col-6">{cityName}</div>
      <div className="d-flex col-6 justify-content-end align-items-center">
        <button
          type="button"
          className="btn btn-primary m-2"
          onClick={handleShowSavedSearch}
        >
          Show Weather
        </button>
        <button
          type="button"
          className="btn btn-danger m-2"
          onClick={handleDeleteSearch}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

// const StyledForecastRowDisplay = styled(ForecastRowDisplay)`
//   font-size: 0.75rem;
// `

export default SavedSearchList

SavedSearchList.propTypes = {
  className: PropTypes.string,
  cityName: PropTypes.string,
  countryName: PropTypes.string,
}

SavedSearchList.defaultProps = {
  className: '',
  cityName: '',
  countryName: '',
}
