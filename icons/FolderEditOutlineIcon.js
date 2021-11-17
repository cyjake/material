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
    <path d="M21,11.11C20.92,11.11 20.72,11.21 20.62,11.31L19.62,12.31L21.72,14.42L22.72,13.41C22.92,13.21 22.92,12.81 22.72,12.61L21.42,11.31C21.32,11.21 21.22,11.11 21,11.11M19.12,12.91L13,18.92V21H15.12L21.22,14.92L19.12,12.91M21,8V8.11L19,10.11V8H3V18H11V20H3C1.9,20 1,19.1 1,18V6C1,4.91 1.9,4 3,4H9L11,6H19C20.12,6 21,6.91 21,8Z" />
  </svg>
)