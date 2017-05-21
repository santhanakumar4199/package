/**
*
* Dialer
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { css,keyframes } from 'styled-components';
import {Block,Input} from 'components';
import CountUp from 'react-countup';

export class Dialer extends React.PureComponent {
//const Dialer = ({val,...props}) => {
constructor(props) {
    super(props);
  }
  
shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdateDialer",nextProps, nextState,this.props);
  if(this.props.val != nextProps.val){
    return true;
  }
  return false;
}  

render() {
  console.log("renderDialer",this.props.val);	
  const transition = keyframes`
  from {
    stroke-dashoffset: 0;
  }
  to {
    stroke-dashoffset: 0;
  }`;


  const MediaSvg = styled.svg`

  `;

  const MediaCircle = styled.circle`
      &.dial__circle {
    fill: transparent;
    stroke-dasharray: 0,20000%;
    stroke-linecap: round;
    stroke-width: 15px;
  }

  &.dial__circle-track {
      fill: transparent;
      stroke: #434343;
      stroke-width: 8px;
  }
  `;


const MediaBlock = styled(Block)`

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
	width:33.3333%;
	padding: 0 10px;
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
	margin-left: 7px;
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
        transform-origin: 0 100%;
left: 55%;
padding-left: 50%;
padding-top: 50%;
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
left: 0;
top: -1px;
margin-left: -6px;
-webkit-animation: fade-in-extended 1.5s forwards;
        animation: fade-in-extended 1.5s forwards;
}

`;

const MediaCount = styled(CountUp)`
.dial__value {
  font-size: 74px;
  font-family: "VodafoneRegularBold";
}
`;

const val = this.props.val ? this.props.val :360;
const maxDegree = 360;
const maxDash = 308;
const diff = 360-308;
const trans = maxDegree / val;
const totdiff = diff / trans;
const dashValue = val - totdiff;
const degr = val - maxDegree;
console.log("valvalval",val);
const dataVal = val != 360 ? 16 * val /360 : 16;


var divback = {"transition-duration":"5s","stroke-dasharray": dashValue +"%, 20000%"};
const trans264 = {"transform": "rotate("+ degr +"deg)"};
// const da = 4.26
// setTimeout(function(){
// 	divback = {"transition-duration":"5s","stroke-dasharray": dashValue +"%, 20000%"};
// },5999);

return (
	<MediaBlock id="dial-data" className="data-dials__content data-dials__content--active grid__item grid__item--gutter grid__item--sm-1/1 grid__item--1/3">
	<MediaBlock className="dial data-dials__dial dial--body dial--finn dial--full dial--dashboard" data-js="_dial" data-value="4.25" data-max-value="16" data-show-segmentations="false" data-max-degrees="250" data-max-percentage="308" data-start-value="0">
	<MediaBlock className="dial__value-wrapper">
	  <MediaBlock className="dial__value-label">UK data</MediaBlock>

	  <MediaCount className="custom-count dial__value" start={16}
	    end={dataVal} duration={2} useEasing={true} separator=" " decimals="2" prefix="" suffix=" " />

	          <span>of 16<abbr title="Gigabyte">GB</abbr> left</span>
	      </MediaBlock>

	      <Mediaspan className="dial__indicator" style={trans264}></Mediaspan>
	  <MediaSvg className="dial__svg" id="svg" width="200" height="200" viewBox="0 0 500 500" version="1.1" xmlns="http://www.w3.org/2000/svg">

		  <MediaCircle  className="dial__circle-track"   cx="250" cy="250" r="245" transform="rotate(-89.8 250 250)" >
		  </MediaCircle>

		  <MediaCircle id="bar" className="dial__circle"  cx="250" cy="250" r="245" style={divback} transform="rotate(-89.8 250 250)" >
		  </MediaCircle>

		</MediaSvg>
	  </MediaBlock>
	</MediaBlock>
  )
}
}

Dialer.propTypes = {

};

export default Dialer;
