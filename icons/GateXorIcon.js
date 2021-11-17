import React from 'react'

const DEFAULT_SIZE = 24

export default ({
  fill = 'currentColor',
  width = DEFAULT_SIZE,
  height = DEFAULT_SIZE,
  style = {},
  ...props
}) => (
  <svg
    viewBox={ `0 0 ${ DEFAULT_SIZE } ${ DEFAULT_SIZE }` }
    style={{ fill, width, height, ...style }}
    { ...props }
  >
    <path d="M2,4C5,10 5,14 2,20H4C7,14 7,10 4.1,4H2M6,4C9,10 9,14 6,20H9C14,20 18,17 22,12C18,7 14,4 9,4H6M9,6C12.8,6 16,8.1 19.3,12C15.9,15.9 12.8,18 9,18C10.5,14 10.5,10 9,6Z" />
  </svg>
)