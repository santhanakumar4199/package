/**
*
* Spring
*
*/

import React from 'react';
import PropTypes from 'prop-types'
import { ifProp } from 'styled-tools'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const styles = css`
	margin: 0 auto;
	maxwidth: 75em;
	min-width: 18.75em;
	padding: 0 0.625em;
	height: 100%;
  background-color: #eee;
  border: 0.0625em dashed ${palette({ grayscale: 0 }, 1)};
  padding: 1.25em;
  text-align: left;
${({ maxwidth }) => {
  switch (maxwidth) {
    case 'small': return css`
      	max-width: 25em;
    `
    case 'medium': return css`
      max-width: 48.75em;
    `
    default: return css`
      max-width: 75em;
    `
  }
}}
`;
const Spring = styled(({ maxwidth, children, palette, theme, ...props }) =>
	React.createElement(`div`, props, children)
		)`${styles}`

Spring.propTypes = {
maxwidth: PropTypes.oneOf(['small', 'medium', 'normal']),
palette: PropTypes.string,
}

Spring.defaultProps = {
maxwidth: 'medium',
palette: 'grayscale',
}
export default Spring;
