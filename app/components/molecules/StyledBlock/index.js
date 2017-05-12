/**
*
* Block
*
*/
import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const lightstyle = css`

  background-color: #f9f9f9;
  border: 1px solid #ddd;
  overflow: hidden;
  padding: 1.875em;
  position: relative;
`
const darkstyle = css`
 background-color: #333;
  padding: 1.250em;
`
const gridstyle = css`
  display: block;
  letter-spacing: -.215em;
  list-style: none;
  margin: 0;
  padding-left: 0;
  box-sizing: border-box;
  width:100%
`
const BlockLight = styled.div`${lightstyle}`
const BlockDark = styled.div`${darkstyle}`
const BlockGrid = styled.div`${gridstyle}`

const StyledBlock = ({ ...props }) => {
  if (props.type === 'dark') {
    return <BlockDark {...props} />
  }
  if (props.type === 'grid') {
    return <BlockGrid {...props} />
  }
  return <BlockLight {...props} />
}


StyledBlock.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

StyledBlock.defaultProps = {
  palette: 'grayscale',
}

export default StyledBlock
