import React from 'react'
import PropTypes from 'prop-types'
import SavedSearchList from '../SavedSearchList'

const CurrentForecastDisplay = ({
  searchList,
  setCurrentWeatherData,
  setForecastWeatherData,
  setSearchList,
}) => {
  return (
    <>
      {searchList.length === 0 ? (
        <div className="container">No Saved Searchs</div>
      ) : (
        <div>
          <div className="container border">
            <h4 className="text-center">Saved Searches</h4>
            {searchList.map((search) => (
              <SavedSearchList
                search={search}
                searchList={searchList}
                setCurrentWeatherData={setCurrentWeatherData}
                setForecastWeatherData={setForecastWeatherData}
                setSearchList={setSearchList}
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
  setSearchList: PropTypes.func,
}

CurrentForecastDisplay.defaultProps = {
  searchList: [],
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
  setSearchList: () => {},
}
