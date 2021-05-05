import React from 'react'
import PropTypes from 'prop-types'

const MainHeading = ({ children }) => {
  return (
    <h1 className="display-2 bg-light text-dark fw-bold lh-lg text-center text-uppercase">
      {' '}
      {children}{' '}
    </h1>
  )
}
export default MainHeading

MainHeading.propTypes = {
  children: PropTypes.node,
}

MainHeading.defaultProps = {
  children: '',
}
