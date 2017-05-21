/**
*
* TableRow
*
*/

import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

const backgroundColor = ({ filled }) => palette('grayscale', filled ? 1 : 0, true)

const TableRow = styled.tr`
  background-color: #ccc;;
  border-bottom: 1px;
`

TableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool,
}

export default TableRow

