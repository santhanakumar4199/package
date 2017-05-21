/**
*
* Label
*
*/

import React,{ PropTypes }  from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'


const styles = css`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 2rem;
  line-height: 2em;
  border: 0.075em solid #E60000;
  
`

const Label = styled(({ children, palette, theme, ...props }) =>
  React.createElement(`label`, props, children)
		)`${styles}`

Label.propTypes = {
 palette: PropTypes.string, 
}
export default Label;
