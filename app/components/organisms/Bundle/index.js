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
import { Block, Heading, StyledGrids, Button, Textlinks, List, ListItem} from 'components';


const BundleInfo = styled(Block)`
&.bundle__info {
	padding: 25px 0 0;
}
&.bundle {
    background-color: #FFF;
    box-shadow: 0 1px 3px 0 #AFAFAF;
    margin: 5px 0;
    padding: 30px 0;
    text-align: center;
    position: relative;
    display: block;
}


&.grid__item {
	display: inline-block;
	letter-spacing: normal;
	margin: 0;
	vertical-align: top;
}
&.grid__item--gutter {
	padding: 0 10px;
}
&.grid__item--middle {
	vertical-align: middle;
}
&.grid__item--sm-1\/1 {
		width: 100%;
}
&.grid__item--sm-1\/2 {
		width: 50%;
}
&.flush--sm-bottom {
		padding-bottom: 0;
	}
`;
const BundleSpring = styled(Block)`
&.bundle__compact-spring {
	max-width: 780px;
	margin: 0 auto;
	border: 0.0625 em;
}
`;
const BundleData = styled.p`
&.bundle-data {
	border-left-width: 0;
	border-right-width: 0;
	display: table;
	table-layout: fixed;
	width: 100%;
	margin-top: 0;
	margin-bottom: 20px;
}
&.bundle-data--narrow {
	border-left-width: 1px;
	border-right-width: 1px;
}
&.bundle-price {
	margin: 0;
}
&.gutter--bottom {
	margin-bottom: 20px !important;
}

`;
const BundleSpan = styled.span`
&.bundle-data__value {
	background-color: #CCC;
    border: 1px solid #CCC;
    border-right-color: transparent;
    color: #333;
    padding: 13px;
    display: table-cell;
    width: 50%;
}
&.bundle-data__value--red {
	background-color: #E60000;
	border-color: #E60000;
	border-right-color: transparent;
	color: #FFFFFF;
}
&.bundle-data__value--red--inverse {
	background-color: #FFFFFF;
	color: #E60000;
}
&.visually-hidden {
	visibility: hidden;
}

`;

const DataStrong = styled(Heading)`
&.bundle-data__heading {
	font-size: 40px;
	line-height: 1em;
	display: block;
	margin: 0 0 3px;
}
&.bundle-price__cost {
	font-size: 40px;
}

`;
const DataNormal= styled.span`
&.bundle-data__text {
	font-size: 20px;
	line-height: 1em;
	display: block;
	margin: 0 0 3px;
}

`;
const BundleGrid = styled(StyledGrids)`
&.grid {
	display: block;
	letter-spacing: -.215em;
	list-style: none;
	margin: 0;
	padding-left: 0;
}
`;
const Abbr = styled.abbr;
const AlignRight = css``;

const Bundle = ({grid, griditem, list, listItem, children, ...props }) => {
  return (
  	<BundleInfo className="bundle">
	  	<BundleInfo className="bundle__info ">
	  		<BundleSpring className="bundle__compact-spring">
	  			<BundleData className="bundle-data bundle-data--narrow">
	  				<BundleSpan className="bundle-data__value  bundle-data__value--red">

	  					<DataStrong className="bundle-data__heading">
	  						5GB </DataStrong><DataNormal className ="bundle-data__text">4G UK data</DataNormal>
	  					
	  				</BundleSpan>
	  				<BundleSpan className="bundle-data__value  bundle-data__value--red bundle-data__value--red--inverse">
	   					<DataStrong className="bundle-data__heading">
	  						1GB <DataNormal className ="bundle-data__text">Roaming data</DataNormal>
	  					</DataStrong>
	  				</BundleSpan>
	  			</BundleData>
	  			<div> </div>
	  			<BundleGrid className="grid">
	  				<BundleInfo className="grid__item grid__item--gutter grid__item--middle grid__item--sm-1/1 grid__item--1/2 flush--sm-bottom">
	  					<Heading level ={4}>15GB Red Value Bundle</Heading>
	  					<BundleData className="bundle-price gutter--bottom">
	   						<DataStrong className="bundle-price__cost">
	  							£40
	  						</DataStrong>/month
	  						
	  					</BundleData>
	  				</BundleInfo>
	  				<BundleInfo className="grid__item grid__item--gutter grid__item--middle grid__item--sm-1/1 grid__item--1/2">
	  					<Button palette={'grayscale'}>Manage</Button>
	  				</BundleInfo>
	  			</BundleGrid>
	  		</BundleSpring>
	  	</BundleInfo>
	  </BundleInfo>
   
    	)
}


Bundle.propTypes = {

};

export default Bundle;
 