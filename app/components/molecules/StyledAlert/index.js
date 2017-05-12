/**
*
* StyledAlert
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'


const testblock = css`
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 30px;
    position: relative;
   `
const alertdiv = css`
	background-color: #4A4D4E;
    color: #FFF;
    border: 1px solid transparent;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    border-color: #FECB00;
    `
const alertdiv1 = css`
	vertical-align: top;
    display: table-cell;
    padding: 11px 15px;
    color: #fff;
    background-color: #FECB00;
    `
const alertdiv2 = css`
	vertical-align: top;
    display: table-cell;
    padding: 12px 20px;
    color: #fff;
  `
const Testblock = styled.div`${testblock}`
const Styledmyalert = styled.div`${alertdiv}`
const Styledmyalert1 = styled.div`${alertdiv1}`
const Styledmyalert2 = styled.div`${alertdiv2}`

const StyledAlert = ({ ...props }) => {
  if (props.alertType === 'valert') {
    return <Testblock {...props} />
  } 
  else if (props.alertType === 'myalert') {
    return <Styledmyalert {...props} />
  }
  else if (props.alertType === 'alertone') {
    return <Styledmyalert1 {...props} />
  }
  else if (props.alertType === 'alerttwo') {
    return <Styledmyalert2 {...props} />
  }

  }

StyledAlert.propTypes = {
	 palette: PropTypes.string,
  	 reverse: PropTypes.bool,
  	 opaque: PropTypes.bool,
     alertType:PropTypes.string,

};

export default StyledAlert
