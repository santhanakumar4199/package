/**
*
* StyledBackground
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const BackgroundPreview = styled.div`
 	background-color: #f9f9f9;
    border: 1px solid #ddd;
    overflow: hidden;
    padding: 3.125em;
    position: relative;
    display: block;
`
const BackgroundContainer = styled.div`
  	padding: 3.125em;
    position: relative;
    z-index: 0;
    box-sizing: border-box;
`

const BackgroundImage = styled.div`
	background-position: center;
    bottom: 0;
    background-size: cover;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  
`
const BackgroundText = styled.div`
      background-color: rgba(0, 0, 0, .4);
    color: #fff;
    max-width: 50%;
    padding: 1.25em;
`


const StyledBackground = ({ BgImageURL, bgText, ...props }) => {
  return (
    <BackgroundPreview {...props}>
      <BackgroundContainer>
      	
      	<BackgroundImage style={{backgroundImage: `url(${BgImageURL})`}} />
      	<BackgroundText>{bgText}</BackgroundText>

      </BackgroundContainer>
    </BackgroundPreview>
  )
}

StyledBackground.propTypes = {
  cite: PropTypes.string,
  children: PropTypes.node,
  reverse: PropTypes.bool,
}

export default StyledBackground;
