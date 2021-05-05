import React from 'react'
import PropTypes from 'prop-types'

import { addToSearchList } from '../../utils/data'
import CurrentForecastHeader from '../CurrentForecastHeader'
import CurrentForecastMain from '../CurrentForecastMain'

const CurrentForecastDisplay = ({
  currentWeatherData,
  searchList,
  setSearchList,
}) => {
  const handleSaveSearch = () => {
    addToSearchList(currentWeatherData, searchList, setSearchList)
  }

  return (
    <>
      {Object.keys(currentWeatherData).length === 0 ? (
        <div className="container">Please search for a location...</div>
      ) : (
        <div className="container bg-clear bg-gradient h-100 py-3 mt-3">
          <CurrentForecastHeader
            currentWeatherData={currentWeatherData}
            onClick={handleSaveSearch}
          />
          <CurrentForecastMain currentWeatherData={currentWeatherData} />
        </div>
      )}
    </>
  )
}

export default CurrentForecastDisplay

CurrentForecastDisplay.propTypes = {
  currentWeatherData: PropTypes.object,

  searchList: PropTypes.array,
  setSearchList: PropTypes.func,
}

CurrentForecastDisplay.defaultProps = {
  currentWeatherData: {},

  searchList: [],
  setSearchList: () => {},
}
