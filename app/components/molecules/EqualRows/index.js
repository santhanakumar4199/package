/**
*
* EqualRows
*
*/


import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
// import styled from 'styled-components';

const block = css`
    background-color: #00000;
    border: 5px solid #ddd;
    overflow: hidden;
    padding: 30px;
    position: relative;
    margin-bottom:20px;
    background":#F4F4F4;
    border-top:1px solid #CCC;
`
const EqualRows = styled.div`${block}`

EqualRows.propTypes = {
	palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,

};



export default EqualRows;
