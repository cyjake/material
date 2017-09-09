import React from 'react'

const DEFAULT_SIZE = 24

export const NotePlusIcon = ({
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
    <path d="M14,10H19.5L14,4.5V10M5,3H15L21,9V19C21,20.1 20.1,21 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M9,18H11V15H14V13H11V10H9V13H6V15H9V18Z" />
  </svg>
)