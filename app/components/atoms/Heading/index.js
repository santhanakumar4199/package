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

export const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}em`
const opposites = {
  top: 'bottom',
  right: 'left',
  bottom: 'top',
  left: 'right',
}

export const perpendicular = ({ position }) =>
  position === 'left' || position === 'right' ? 'top' : 'left'
export const perpendicularOpposite = props => opposites[perpendicular(props)]

export const perpendicularAxis = ({ position }) =>
    position === 'left' || position === 'right' ? 'Y' : 'X'

const styles = css`
  position: relative;
  font-family: ${font('primary')};
  font-size: ${fontSize};
  fontweight: normal;
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${palette({ grayscale: 0 }, 1)};
  display: inline-block;
  ${({ fontWeight }) => {
    switch (fontWeight) {
      case 'dark': return css`
        fontWeight: bold;
      `
      case 'light': return css`
        fontWeight: lighter;
      `
      default: return css`
        fontWeight: normal;
      `
    }
  }}
  ${({ align }) => {
    switch (align) {
      case 'start': return css`
        ${perpendicular}: 0;
      `
      case 'center': return css`
        ${perpendicular}: 50%;
        transform: translate${perpendicularAxis}(-50%);
      `
      default: return css`
        ${perpendicularOpposite}: 0;
      `
    }
  }}
`

const Heading = styled(({ level, align, fontWeight, padding, children, reverse, palette, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
  )`${styles}`


Heading.propTypes = {
  level: PropTypes.number,
  padding: PropTypes.number,
  align: PropTypes.oneOf(['start', 'center', 'end']),
  fontWeight: PropTypes.oneOf(['dark', 'light', 'normal']),
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  collapsed: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  align: 'end',
  fontWeight: 'normal',
  palette: 'grayscale',
  }

export default Heading
