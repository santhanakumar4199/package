/**
*
* Bundle
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Demogrids, Button, Textlinks, List, ListItem} from 'components';

const BundleWrapper = styled.div`
  background-color: #FFFFFF;
	box-shadow: 0 1px 3px 0 #AFAFAF;
	margin: 5px 0;
	padding: 30px 0;
	position: relative;
	text-align: center;
  `;

  const P = styled.p``;
  const Span = styled.span`
  background: #E60000
	border: none;
	clip: rect(0 0 0 0);
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
	width: 1px;
  `;
const Summary = styled.div`
padding: 1.875em;
`;
const Grid = styled.p`
  display: block;
	letter-spacing: -.215em;
	list-style: none;
	margin: 0;
	padding-left: 0;
`;
const GridItem = styled.span`
display: inline-block;
	letter-spacing: normal;
	margin: 0;
	vertical-align: top;
`;
const Bundle = ({grid, griditem, list, listItem, children, ...props }) => {
  return (
    <BundleWrapper {...props}>
      <Summary>{children}</Summary>
      <Grid>{grid}</Grid>
      <GridItem>{griditem}</GridItem>
    </BundleWrapper>
  )
}

Bundle.propTypes = {
children: PropTypes.any.isRequired,
grid: PropTypes.node,
griditem: PropTypes.node,
};

export default Bundle;
