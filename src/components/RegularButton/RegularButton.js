import React from 'react'
import PropTypes from 'prop-types'

const RegularButton = ({ onClick, children }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-clear-dark text-white w-100 px-0"
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default RegularButton

RegularButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
}

RegularButton.defaultProps = {
  onClick: () => {},
  children: '',
}
