/**
*
* Accordian
*
*/
import React,{PropTypes } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components'
import Collapse from 'react-collapse';
import {Block,Heading,Badge } from 'components'
import downarrow from './downarrow.png';

const Accordian = ({myDashProp,...props}) => {
  const AccorBlock = styled(Block)`
  &.accordion {
  	list-style: none;
  	padding: 0;
  }
  &.accordion__item {
  	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  	margin: 0 0 10px;
  	background: #FFFFFF;
  	width: 100%;
  }
  &.accordion__content {
	display: block;
	border-top: 1px solid #CCCCCC;
	margin-right: 20px;
	margin-left: 20px;
	padding: 35px 20px;
}
  `
  const AccorH3 = styled(Heading)`
    &.accordion__heading {
  	margin: 0;
  	overflow: hidden;
  	line-height: 1.3em;
  	padding: 30px 40px;
  }
  &.accordion__heading:hover {
  	cursor: pointer;
  }
  `;

  const AccorSPAN = styled(Badge)`
  background-color: white;
  font-size: 2.05rem;
  line-height: 0.5em;
  color:black;
  &.chevron {
  	display: table;
  	position: relative;
  	width: 100%;
  }
  &.chevron__text, .chevron__container {
  	display: table-cell;
  	vertical-align: middle;

  }
  &.chevron--inline .chevron__text {
  	display: inline;
  }
  &.accordion__chevron {
  	-webkit-transform: scaleY(-1);
  	    -ms-transform: scaleY(-1);
  	        transform: scaleY(-1);
  }
  &.chevron__container {
    line-height: 0;
    text-align: right;
  }

  `;

const ss={
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    margin: "0 0 10px",
    background: "#FFFFFF",
    width: "100%",
  }

console.log("trshgkj",this.default.accorChange);
  return (
          <div className="accordion__item" style={ss} >
            <AccorH3 className="accordion__heading" onClick={() => myDashProp.accorChange(myDashProp)}>
                <AccorSPAN className="chevron">
                    <AccorSPAN className="chevron__text">Lorem ipsum</AccorSPAN>
                    <AccorSPAN className="chevron__container accordion__chevron">
                      
                    </AccorSPAN>
                </AccorSPAN>
            </AccorH3>
            <Collapse isOpened={myDashProp.Dashboard}>
                <AccorBlock className="accordion__content">Aenean eu rhoncus magna.</AccorBlock>
            </Collapse>
            </div>
  )
}
Accordian.propTypes = {
  accorChange: PropTypes.func.isRequired,
};

export default Accordian;
