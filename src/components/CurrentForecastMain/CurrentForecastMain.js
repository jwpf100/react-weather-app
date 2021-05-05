import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { weatherIconLink } from '../../utils/api'
import { degToCompass } from '../../utils/maths'

const CurrentForecastMain = ({ currentWeatherData, className }) => {
  const weatherIcon = currentWeatherData.data[0].weather.icon
  const weatherDescription = currentWeatherData.data[0].weather.description
  const { sunset, sunrise, precip } = currentWeatherData.data[0]
  const temperature = currentWeatherData.data[0].temp.toFixed()
  const windSpd = currentWeatherData.data[0].wind_spd.toFixed()
  const windDir = degToCompass(currentWeatherData.data[0].wind_dir)

  return (
    <div className={['', className].join(' ')}>
      <p className="fst-italic fw-light d-inline-block">{`Sunrise: ${sunrise} Sunset: ${sunset}`}</p>
      <div className="row my-5">
        <div className="col-6 d-flex justify-content-center align-items-center">
          <img
            src={`${weatherIconLink}${weatherIcon}.png`}
            alt={weatherDescription}
            width="150px"
            className="text-center"
          />
        </div>
        <div className="col-6 d-flex justify-content-center align-items-center">
          <p className="temperature display-1 text-center">{`${temperature}\u00B0C`}</p>
        </div>
      </div>
      <div>
        <p className="text-start fst-italic fw-light">{`${weatherDescription}`}</p>
        <div className="d-flex justify-content-between">
          <p className="fst-italic fw-light d-inline-block">{`Windspeed: ${windSpd} m/s ${windDir}`}</p>
          <p className="fst-italic fw-light d-inline-block">{`Rain: ${precip}mm`}</p>
        </div>
      </div>
    </div>
  )
}

const StyledCurrentForecastMain = styled(CurrentForecastMain)`
  .temperature {
    font-size: 72px;
  }
`

export default StyledCurrentForecastMain

CurrentForecastMain.propTypes = {
  currentWeatherData: PropTypes.object,
  className: PropTypes.string,
}

CurrentForecastMain.defaultProps = {
  currentWeatherData: {},
  className: '',
}
