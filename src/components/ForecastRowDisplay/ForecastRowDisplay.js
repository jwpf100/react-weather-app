import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const { DateTime } = require('luxon')

const ForecastRowDisplay = ({
  className,
  forecastWeather,
  weatherIconLink,
}) => {
  const date = DateTime.fromISO(forecastWeather.valid_date).toFormat('ccc')
  // const date = forecastWeather.valid_date
  const weatherIcon = forecastWeather.weather.icon
  const { description } = forecastWeather.weather
  const maxTemp = forecastWeather.max_temp
  const minTemp = forecastWeather.min_temp
  const rainfall = forecastWeather.precip.toFixed()

  return (
    <div className={['row ', className].join(' ')}>
      <div className="h6 mb-0 col-3 fw-light d-flex justify-content-center align-items-center">
        {date}
      </div>

      <img
        src={`${weatherIconLink}${weatherIcon}.png`}
        alt={description}
        className="col-2 offset-1 img-fluid d-flex justify-content-center align-items-center"
      />
      {/* <div className="col-4 fw-light">{description}</div> */}
      <div className="col-3 fw-light fst-italic d-flex justify-content-center align-items-center">{`${maxTemp}\u00B0/${minTemp}\u00B0`}</div>
      <div className="col-3 fw-light fst-italic d-flex justify-content-center align-items-center">{`${rainfall} mm`}</div>
    </div>
  )
}

const StyledForecastRowDisplay = styled(ForecastRowDisplay)`
  font-size: 0.75rem;
  img {
    max-width: 90px;
  }
`

export default StyledForecastRowDisplay

ForecastRowDisplay.propTypes = {
  className: PropTypes.string,
  forecastWeather: PropTypes.object,
  weatherIconLink: PropTypes.string,
}

ForecastRowDisplay.defaultProps = {
  className: '',
  forecastWeather: {},
  weatherIconLink: '',
}
