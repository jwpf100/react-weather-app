import React from 'react'
import PropTypes from 'prop-types'
import SavedSearchList from '../SavedSearchList'

const CurrentForecastDisplay = ({
  searchList,
  setCurrentWeatherData,
  setForecastWeatherData,
  setCurrentSearch,
  setSearchList,
}) => {
  return (
    <>
      {searchList.length === 0 ? (
        <div className="container">No Saved Searchs</div>
      ) : (
        <div>
          <div className="savedSearchDisplay container bg-opacity-0 mt-3 py-3 ">
            {searchList.map((search) => (
              <SavedSearchList
                search={search}
                searchList={searchList}
                setCurrentWeatherData={setCurrentWeatherData}
                setForecastWeatherData={setForecastWeatherData}
                setSearchList={setSearchList}
                setCurrentSearch={setCurrentSearch}
              />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default CurrentForecastDisplay

CurrentForecastDisplay.propTypes = {
  searchList: PropTypes.array,
  setCurrentWeatherData: PropTypes.func,
  setForecastWeatherData: PropTypes.func,
  setCurrentSearch: PropTypes.func,
  setSearchList: PropTypes.func,
}

CurrentForecastDisplay.defaultProps = {
  searchList: [],
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
  setCurrentSearch: () => {},
  setSearchList: () => {},
}
