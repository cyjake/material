import React from 'react'

const DEFAULT_SIZE = 24

export const HouzzBoxIcon = ({
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
    <path d="M12,4L7.41,6.69V12L12,9.3V4M12,9.3V14.7L12,20L16.59,17.31V12L16.59,6.6L12,9.3M12,14.7L7.41,12V17.4L12,14.7M5,3H19C20.1,3 21,3.9 21,5V19C21,20.1 20.1,21 19,21H5C3.9,21 3,20.1 3,19V5C3,3.9 3.9,3 5,3Z" />
  </svg>
)