import React from 'react'
import PropTypes from 'prop-types'

const SearchTextInput = ({ search, setSearch, placeholder }) => {
  const handleSearchTerm = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <input
        type="text"
        value={search}
        onChange={handleSearchTerm}
        placeholder={placeholder}
        className="w-100 bg-clear-light border-1 border-clear-light rounded"
      />
    </>
  )
}

export default SearchTextInput

SearchTextInput.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  placeholder: PropTypes.string,
}

SearchTextInput.defaultProps = {
  search: '',
  setSearch: '',
  placeholder: '',
}
