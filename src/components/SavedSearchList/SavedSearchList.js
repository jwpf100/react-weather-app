import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  fetchCurrentWeatherData,
  fetchForecastWeatherData,
} from '../../utils/api'
import RegularButton from '../RegularButton'

const SavedSearchList = ({
  className,
  search,
  searchList,
  setCurrentWeatherData,
  setForecastWeatherData,
  setSearchList,
  setCurrentSearch,
}) => {
  const handleShowSavedSearch = () => {
    fetchCurrentWeatherData(
      search.latInput,
      search.lonInput,
      search.cityInput,
      search.stateInput,
      search.countryInput,
      '',
      setCurrentWeatherData,
      setCurrentSearch
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

  const deleteFromList = () => {
    const newList = [...searchList]
    const indexToDelete = newList.findIndex(
      (element) => element.uniqueID === search.uniqueID
    )
    newList.splice(indexToDelete, 1)
    setSearchList(newList)
  }

  return (
    <div
      className={[
        'd-flex justify-content-start align-items-center text-start',
        className,
      ].join(' ')}
    >
      <div className="fw-light px-3 col-8">{`${search.cityInput}, ${search.countryInput}`}</div>
      <div className="d-flex col-4 justify-content-end align-items-center">
        <div className="col-6 p-1 my-1">
          <RegularButton
            onClick={handleShowSavedSearch}
            bsClass="btn-opacity-0 border-white"
          >
            Show
          </RegularButton>
        </div>
        <div className="col-6 p-1">
          <RegularButton
            onClick={deleteFromList}
            bsClass="btn-danger bg-opacity-50 border-white"
          >
            Delete
          </RegularButton>
        </div>
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
  setCurrentSearch: PropTypes.func,
}

SavedSearchList.defaultProps = {
  className: '',
  search: {},
  searchList: [],
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
  setSearchList: () => {},
  setCurrentSearch: () => {},
}
