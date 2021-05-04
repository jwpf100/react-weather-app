// Test Data

// Current Forecast
const fetchCurrentWeatherData = () => {
  const forecastData = {
    data: [
      {
        rh: 93,
        pod: 'n',
        lon: -43.2075,
        pres: 1016.3,
        timezone: 'America/Sao_Paulo',
        ob_time: '2021-05-04 07:11',
        country_code: 'BR',
        clouds: 6,
        ts: 1620112272,
        solar_rad: 0,
        state_code: '21',
        city_name: 'Rio de Janeiro',
        wind_spd: 1,
        wind_cdir_full: 'north',
        wind_cdir: 'N',
        slp: 1017,
        vis: 5,
        h_angle: -90,
        sunset: '20:25',
        dni: 0,
        dewpt: 18.8,
        snow: 0,
        uv: 0,
        precip: 0,
        wind_dir: 360,
        sunrise: '09:13',
        ghi: 0,
        dhi: 0,
        aqi: 89,
        lat: -22.90278,
        weather: {
          icon: 'c01n',
          code: 800,
          description: 'Clear sky',
        },
        datetime: '2021-05-04:07',
        temp: 20,
        station: 'SBGL',
        elev_angle: -30.98,
        app_temp: 20.5,
      },
    ],
    count: 1,
  }
  return forecastData
}

export { fetchCurrentWeatherData }
