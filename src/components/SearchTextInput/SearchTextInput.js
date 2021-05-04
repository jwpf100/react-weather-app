import React from 'react'
import PropTypes from 'prop-types'

const SearchTextInput = ({ search, setSearch, placeholder }) => {
  const handleSearchTerm = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          value={search}
          onChange={handleSearchTerm}
          placeholder={placeholder}
          className="p-1 m-2"
        />
      </div>
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
