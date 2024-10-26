import React, { memo } from 'react'

const Nav = ({navdata}) => {
  return (
    <div>{console.log(navdata)}</div>
  )
}

export default memo(Nav)