import React from 'react'
import PropTypes from 'prop-types'

const SearchBox = ({ search, setSearch, placeholder }) => {
  const handleSearchTerm = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          onChange={handleSearchTerm}
          placeholder={placeholder}
          className="p-1 m-2"
        />
      </div>
    </>
  )
}

export default SearchBox

SearchBox.propTypes = {
  search: PropTypes.string,
  setSearch: PropTypes.func,
  placeholder: PropTypes.string,
}

SearchBox.defaultProps = {
  search: '',
  setSearch: '',
  placeholder: '',
}
