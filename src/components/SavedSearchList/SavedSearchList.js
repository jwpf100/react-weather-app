import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from '../../utils/api'

const SavedSearchList = ({
  className,
  search,
  searchList,
  setCurrentWeatherData,
  setForecastWeatherData,
  setSearchList,
}) => {
  const handleShowSavedSearch = () => {
    fetchCurrentWeatherData(
      search.latInput,
      search.lonInput,
      search.cityInput,
      search.stateInput,
      search.countryInput,
      '',
      setCurrentWeatherData
    )
    fetchForecastWeatherData(
      search.latInput,
      search.lonInput,
      search.cityInput,
      search.stateInput,
      search.countryInput,
      '',
      setForecastWeatherData
    )
  }

  const handleDeleteSearch = () => {
    // Find index of search.city in array

    const indexToDelete = searchList.findIndex(
      (element) => element.uniqueID === search.uniqueID
    )
  }

  return (
    <div
      className={[
        'd-flex justify-content-start align-items-center text-start',
        className,
      ].join(' ')}
    >
      <div className="px-3 col-6">{`${search.cityInput}, ${search.countryInput}`}</div>
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
          onClick={() => handleDeleteSearch(search, searchList, setSearchList)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

const StyledSavedSearchList = styled(SavedSearchList)`
  button {
    font-size: 0.75rem;
  }
`

export default StyledSavedSearchList

SavedSearchList.propTypes = {
  className: PropTypes.string,
  search: PropTypes.object,
  searchList: PropTypes.array,
  setCurrentWeatherData: PropTypes.func,
  setForecastWeatherData: PropTypes.func,
  setSearchList: PropTypes.func,
}

SavedSearchList.defaultProps = {
  className: '',
  search: {},
  searchList: [],
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
  setSearchList: () => {},
}
