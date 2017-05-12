/**
*
* Dialer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { css } from 'styled-components';
import {Block} from 'components';

const MediaSvg = styled.svg`

`;

const MediaCircle = styled.circle`
    &.dial__circle {
  fill: transparent;
  stroke-dasharray: 0,20000%;
  stroke-linecap: round;
  stroke-width: 15px;
  -webkit-transition: stroke-dasharray .4s ease-in-out;
  transition: stroke-dasharray .4s ease-in-out;
}

&.dial__circle-track {
    fill: transparent;
    stroke: #434343;
    stroke-width: 8px;
}
`;

const Dialer = ({...props}) => {

const MediaBlock = styled(Block)`
   &.cont {
  display: block;
  height: 200px;
  width: 200px;
  margin: 2em auto;
  box-shadow: 0 0 1em black;
  border-radius: 100%;
  position: relative;
}
&.cont:after {
  position: absolute;
  display: block;
  height: 160px;
  width: 160px;
  left: 50%;
  top: 50%;
  box-shadow: inset 0 0 1em black;

  margin-top: -80px;
  margin-left: -80px;
  border-radius: 100%;
  line-height: 160px;
  font-size: 2em;
  text-shadow: 0 0 0.5em black;
}
&.data-dials__content {
		display: none;
	}
&.data-dials__content--active {
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
  margin-left:11%;
}

&.dial {
	border-radius: 50%;
	display: inline-block;
	line-height: 0;
	overflow: hidden;
	padding: 10px;
	position: relative;
	z-index: 0;
}
&.data-dials__dial {
	max-width: 180px;
}

&.dial--body::before {
	content: "";
	position: absolute;
	width: 6px;
	height: 6px;
	background-color: #FFFFFF;
	border-radius: 50%;
	z-index: 3;
	left: 50%;
	margin-left: -3px;
	margin-top: -1px;
	-webkit-animation: fade-in-extended 1.5s;
	        animation: fade-in-extended 1.5s;
}

&.dial--body .dial__circle-track {
	stroke: #CCCCCC;
	fill: #FFFFFF;
	stroke-width: 16px;
}

&.dial--body .dial__circle {
	stroke-width: 26px;
}
&.dial--finn .dial__circle {
	stroke: #5E2750;
}

&.dial--finn .dial__circle-track {
	stroke: #CCCCCC;
}
&.dial--full {
	overflow: visible;
	padding: 0;
}

&.dial--full .dial__svg {
	overflow: inherit;
}
&.dial--dashboard .dial__value {
	font-size: 56px;
}

&.dial--dashboard .dial__svg {
	height: 180px;
}
&.dial--finn .dial__value-wrapper{
	color: #333333;
}
&.dial__value-wrapper {
	-webkit-animation: value 1s 1s forwards;
	        animation: value 1s 1s forwards;
	color: #FFFFFF;
	left: 54%;
	line-height: 1;
	position: absolute;
	text-align: center;
	top: 0;
	margin-top: 50%;
	-webkit-transform: translate(-50%, -50%);
	    -ms-transform: translate(-50%, -50%);
	        transform: translate(-50%, -50%);
	z-index: 2;
}
&.dial__value-label {
	font-size: 20px;
}
.dial__value {
	font-size: 74px;
	font-family: "VodafoneRegularBold";
}
`;
const Mediaspan = styled.span`
&.dial__indicator {
position: absolute;
-webkit-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
        transform-origin: 0 101%;
left: 54%;
padding-left: 50%;
padding-top: 51%;
z-index: 1;
-webkit-transition: -webkit-transform .4s ease-in-out;
        transition: transform .4s ease-in-out;
}

&.dial__indicator::before {
content: "";
border: 3px solid transparent;
border-right-color: #FFFFFF;
height: 0;
width: 0;
position: absolute;
left: -10px;
top: -1px;
margin-left: -6px;
-webkit-animation: fade-in-extended 1.5s forwards;
        animation: fade-in-extended 1.5s forwards;
}

`;


const divback = {"stroke-dasharray": "81.8125%, 20000%"};
const trans264 = {"transform": "rotate(-264deg)"};
  return (

<MediaBlock id="dial-data" className="data-dials__content data-dials__content--active grid__item grid__item--gutter grid__item--sm-1/1 grid__item--1/3">
<MediaBlock className="dial data-dials__dial dial--body dial--finn dial--full dial--dashboard" data-js="_dial" data-value="4.25" data-max-value="16" data-show-segmentations="false" data-max-degrees="360" data-max-percentage="308" data-start-value="16">
<MediaBlock className="dial__value-wrapper">
  <MediaBlock className="dial__value-label">UK data</MediaBlock>

          <MediaBlock className="js-dial-value dial__value">4.25</MediaBlock>

          <span>of 16<abbr title="Gigabyte">GB</abbr> left</span>
      </MediaBlock>

      <Mediaspan className="dial__indicator" style={trans264}></Mediaspan>
  <MediaSvg className="dial__svg" id="svg" width="200" height="200" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">

	  <MediaCircle  className="dial__circle-track"  cx="250" cy="250" r="245" transform="rotate(-95.8 250 250)" >
	  </MediaCircle>

	  <MediaCircle id="bar" className="dial__circle" cx="250" cy="250" r="245" style={divback} transform="rotate(-95.8 250 250)" >
	  </MediaCircle>

	</MediaSvg>
  </MediaBlock>
</MediaBlock>
  )
}

Dialer.propTypes = {

};

export default Dialer;
