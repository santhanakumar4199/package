/**
*
* StyledSections
*
*Developed by SM
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

import { FormattedMessage } from 'react-intl';
import messages from './messages';
// import styled from 'styled-components';

const outerSection = css`
    border: 1px dashed #e60000;
    margin: 50px 0;
    position: relative;
    box-sizing: border-box;
    display: block;
`

const innerSection = css`
    margin: 0 auto;
    max-width: 1200px;
    min-width: 300px;
    padding: 0 10px;
    height: 100%;
    box-sizing: border-box;
    display: block;
`
const colouredSection = css`
    padding: 50px 0;
    background-color: #F4F4F4;
    box-sizing: border-box;
    display: block;
`

const breadSection = css`
    margin: 0 auto;
    background-color: #F4F4F4;
    color: #333;
    background: inherit;
    border-bottom: 1px solid #CCC;
    border-top: 1px solid #CCC;
    padding: 18px 0;
    text-align: left;
    display: block;
    box-sizing: border-box;
`

const FirstSection = styled.div`${outerSection}`
const SecondSection = styled.div`${innerSection}`
const ColouredSection = styled.div`${colouredSection}`
const BreadcrumbsSection = styled.div`${breadSection}`

const StyledSections = ({ ...props }) => {
  if (props.sectionType === 'outer') {
    return <FirstSection {...props} />
  }
   if (props.sectionType === 'inner') {
    return <SecondSection {...props} />
  }
  if (props.sectionType === 'colour') {
    return <ColouredSection {...props} />
  }
  if (props.sectionType === 'bread') {
    return <BreadcrumbsSection {...props} />
  }
 
  return <FirstSection {...props} />
}


StyledSections.propTypes = {
	sectionType: PropTypes.string,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,

}

StyledSections.defaultProps = {
  palette: 'grayscale',
}





export default StyledSections
