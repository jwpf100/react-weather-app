import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ForecastRowDisplay = ({
  className,
  forecastWeather,
  weatherIconLink,
}) => {
  // Set State
  console.log(forecastWeather)
  return (
    <div
      className={[
        'd-flex justify-content-start align-items-center text-start',
        className,
      ].join(' ')}
    >
      <div className="px-3 w-25">{forecastWeather.valid_date}</div>
      <div className="d-flex w-100 justify-content-around align-items-center">
        <img
          src={`${weatherIconLink}${forecastWeather.weather.icon}.png`}
          alt={forecastWeather.weather.description}
          width="40px"
          className="me-2"
        />
        <div className="">{forecastWeather.weather.description}</div>
        <div className="">{`${forecastWeather.max_temp}\u00B0/${forecastWeather.min_temp}\u00B0`}</div>
        <div className="">{`${forecastWeather.precip} mm`}</div>
      </div>
    </div>
  )
}

const StyledForecastRowDisplay = styled(ForecastRowDisplay)`
  font-size: 0.75rem;
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
