import React from 'react'
import Helmet from 'react-helmet'

function Meta({ title = '' }) {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  )
}

export default Meta
