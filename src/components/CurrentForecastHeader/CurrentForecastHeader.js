import React from 'react'
import PropTypes from 'prop-types'
import RegularButton from '../RegularButton'

const CurrentForecastHeader = ({ currentWeatherData, onClick }) => {
  const lat =
    currentWeatherData.data[0].lat.toFixed() > 0
      ? `${currentWeatherData.data[0].lat.toFixed()}\u00B0 N`
      : `${-currentWeatherData.data[0].lat.toFixed()}\u00B0 S`
  const lon =
    currentWeatherData.data[0].lon.toFixed() > 0
      ? `${currentWeatherData.data[0].lon.toFixed()}\u00B0 E`
      : `${-currentWeatherData.data[0].lon.toFixed()}\u00B0 W`
  const countryCode = currentWeatherData.data[0].country_code

  return (
    <div className="d-flex">
      <div className="col-10 mt-3 text-start">
        <h2 className="display-4 text-uppercase">{`${currentWeatherData.data[0].city_name} `}</h2>
        <p className="fst-italic fw-light">{`(${countryCode} ${lat} ${lon})`}</p>
      </div>
      <div className="col-2 d-flex justify-content-center align-items-center">
        <RegularButton onClick={onClick}>Save</RegularButton>
      </div>
    </div>
  )
}

export default CurrentForecastHeader

CurrentForecastHeader.propTypes = {
  currentWeatherData: PropTypes.object,
  onClick: PropTypes.func,
}

CurrentForecastHeader.defaultProps = {
  currentWeatherData: {},
  onClick: () => {},
}
