import React from 'react'
import PropTypes from 'prop-types'

const RegularButton = ({ onClick, bsClass, children }) => {
  return (
    <>
      <button
        type="button"
        className={['btn text-white w-100 px-0', bsClass].join(' ')}
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
  bsClass: PropTypes.string,
}

RegularButton.defaultProps = {
  onClick: () => {},
  children: '',
  bsClass: '',
}
