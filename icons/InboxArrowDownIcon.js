import React from 'react'

const DEFAULT_SIZE = 24

export const InboxArrowDownIcon = ({
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
    <path d="M16,10H14V7H10V10H8L12,14M19,15H15C15,16.66 13.66,18 12,18C10.34,18 9,16.66 9,15H5V5H19M19,3H5C3.89,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3Z" />
  </svg>
)