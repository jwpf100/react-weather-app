import React from 'react'
import PropTypes from 'prop-types'
import SavedSearchList from '../SavedSearchList'

const CurrentForecastDisplay = ({ searchList }) => {
  console.log(searchList)
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
                cityName={search.cityInput}
                countryName={search.cityInput}
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
}

CurrentForecastDisplay.defaultProps = {
  searchList: [],
}
