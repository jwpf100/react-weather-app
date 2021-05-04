import React, { useState } from 'react'
import SearchTextInput from '../SearchTextInput'

const SearchCitySection = () => {
  const [searchCity, setSearchCity] = useState()
  const [searchCountry, setSearchCountry] = useState()

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <SearchTextInput
          search={searchCity}
          setSearch={setSearchCity}
          placeholder="City"
        />
        <SearchTextInput
          search={searchCountry}
          setSearch={setSearchCountry}
          placeholder="Country"
        />
      </div>
    </>
  )
}

export default SearchCitySection
