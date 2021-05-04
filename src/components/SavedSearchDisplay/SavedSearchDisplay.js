import React from 'react'
import PropTypes from 'prop-types'
import SavedSearchList from '../SavedSearchList'

const CurrentForecastDisplay = ({
  searchList,
  setCurrentWeatherData,
  setForecastWeatherData,
}) => {
  return (
    <>
      {searchList.length === 0 ? (
        <div>No Saved Searchs</div>
      ) : (
        <div>
          <div className="container border">
            <h4 className="text-center">Saved Searches</h4>
            {searchList.map((search) => (
              <SavedSearchList
                search={search}
                setCurrentWeatherData={setCurrentWeatherData}
                setForecastWeatherData={setForecastWeatherData}
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
}

CurrentForecastDisplay.defaultProps = {
  searchList: [],
  setCurrentWeatherData: () => {},
  setForecastWeatherData: () => {},
}
