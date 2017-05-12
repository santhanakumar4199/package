/**
*
* Device
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
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 30px;
    position: relative;
    margin-bottom:20px;
`

const Device = styled.div`${block}`

Device.propTypes = {
	palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,

};

export default Device;
