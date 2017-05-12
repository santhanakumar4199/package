/**
*
* StyledSlider
*
*/


/**
*
* Heading
*
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'



const styles = css`
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;
    overflow-y: hidden;
    position: relative;
    white-space: nowrap;
    max-height: 100%;
    box-sizing: border-box;
    display: block;
   
`

const SildersSlidesStyles = css`
display: table;
    margin: 0;
    padding: 0;
    white-space: normal;
    width: 100%;
    list-style: none;
    table-layout: fixed;
    box-sizing: border-box;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: em;
    -webkit-margin-end: em;
    -webkit-padding-start: 2.500em;
`
const SildersSlide= css`
    min-width: 12.500em;
    display: table-cell;
    text-align: center;
    box-sizing: border-box;
    ${({ sliderPosition}) => {
    switch (sliderPosition) {
      case 'first': return css`
        padding-left: 0;
      `
      case 'last': return css`
        padding-right: 0;
      `
      default: return css`
         padding: 0;
      `
     
    }
  }}
   ${({ sliderAlign}) => {
    switch (sliderAlign) {
      case 'top': return css`
       vertical-align: top;
      `
      case 'middle': return css`
        vertical-align: middle;
      `
      case 'bottom': return css`
        vertical-align: bottom;
      `
     
     
      
    }
  }}
 
`
const BaseSlider = styled.li`${styles}`
const SliderContainer = styled.ul`${SildersSlidesStyles}`
const SideSliders = styled.li`${SildersSlide}`







const StyledSlider = ({ ...props }) => {
	if (props.sliderType === 'base') {
    return <BaseSlider {...props} />
  }
 
  if (props.sliderType === 'container') {
    return <SliderContainer {...props} />
  }
	 if (props.sliderType === 'sides') {
    return <SideSliders {...props} />
  }
  
  return <BaseSlider {...props} />
}



StyledSlider.propTypes = {
  
  padding: PropTypes.number,
  sliderAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  sliderPosition: PropTypes.oneOf(['first', 'last']),
  palette: PropTypes.string,
  sliderType:PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledSlider.defaultProps = {
  level: 1,
  align: 'end',
  fontWeight: 'normal',
  palette: 'grayscale',
  borderCollapse: 'inherit',
}



export default StyledSlider
