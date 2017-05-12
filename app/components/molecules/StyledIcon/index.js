/**
*
* StyledIcon
*
*developed by SM
*/

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.25em'

const Wrapper = styled.span`
    display: inline-block;
    font-size: ${fontSize};
    color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
    width: 1em;
    height: 1em;
    margin: 0.1em;
    box-sizing: border-box;

  & > svg {
    fill: none;
    stroke: currentColor;
    stroke-width: .4em;
    vertical-align: middle;
    display: block;
    margin: 0 auto 12px;
    width: 44px;
    height: 44px;

  }
`

const StyledIcon = ({ icon, ...props }) => {
  const svg = require(`!raw-loader!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

StyledIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

export default StyledIcon
