/**
*
* Table
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Caption } from 'components'

const StyledTable = styled.table`
  font-family: ${font('primary')};
  border-collapse: collapse;
  width: 100%;
  border: 1px;
  color: ${palette('grayscale', 0)};
  border-bottom: 1px solid #fff;
`

const Table = ({ caption, head, foot, children, ...props }) => {
  return (
    <StyledTable {...props}>
      {caption && <Caption reverse={props.reverse}>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  head: PropTypes.node,
  foot: PropTypes.node,
  children: PropTypes.any,
  reverse: PropTypes.bool,
}

export default Table

