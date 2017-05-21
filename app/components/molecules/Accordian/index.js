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
import Button from  'components';
import { font, palette } from 'styled-theme';

const AccorText ="Alice's current spend since last bill";
const Accordian = ({myDashProp,...props}) => {
  const AccorBlock = styled(Block)`
  &.accordion {
  	color: #333;
    font-size: 18px;
    line-height: 1.333;
    font-family: VodafoneRegular;
    -webkit-font-smoothing: antialiased;
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
	margin-left: 40px;
	padding: 35px 20px;
}
&.bills-summary {
  padding-left: 20px;
  position: relative;
}

&.bills-summary::before {
  background-color: #E60000;
  border-radius: 10px;
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  top: 0;
  width: 5px;
}
&.bills-summary__container {
  padding: 20px 0;
  display: table;
  width: 100%;
}
&.bills-summary__col {
  display: table-cell;
  vertical-align: middle;
  width: 50%;
}
&.bills-summary__col--align-right {
  text-align: right;
}
  `;
  const AccorH3 = styled(Block)`
    &.accordion__heading {
  	margin: 0;
  	overflow: hidden;
  	line-height: 1.3em;
    background-color: #333;
    color: #FFF;
    padding: 25px 98px 25px 25px;
    position: relative;
   
    
  }
  &.accordion__heading:hover {
  	cursor: pointer;
  }
  `;
  const H3 = styled(Heading)`
    &.bills-summary__heading {
      font-family: "VodafoneLight";
      font-size: 28px;
      margin: 0;
    }
  `;

  const AccorSPAN = styled(Badge)`
  background-color: transparent;
  font-size: 18px;
  padding:0px;
  &.heading {
  display: block;
  font-family: "VodafoneLight";
  font-weight: normal;
  line-height: 1em;
  margin: 0;
  width: 100%;
}

&.heading--1 {
  font-size: 55px;
}

  &.accorbadge {
    font-size: 0.5em;
    margin-left: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #E60000;
    border-radius: 10px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
    width: 5px;
  }
  
  &.chevron {
  	display: table;
  	position: relative;
  	width: 100%;
    background-color: #333;
    border-top: 25px;
  }
  &.chevron__text, .chevron__container {
  	
  	vertical-align: middle;
      background-color: #333;
      color: #FFF;
      font-size: 20px;
      font-family: ${font('primary')};


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
    font-size: 18px;
  }

  `;

const ss={
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    margin: "0 0 10px",
    background: "#FFFFFF",
    width: "100%",
  }
const Div = styled.div``;
console.log("trshgkj",this.default.accorChange);
  return (
          <div className="accordion__item" style={ss} >
            <AccorH3 className="accordion__heading" onClick={() => myDashProp.accorChange(myDashProp)}>
               <AccorBlock className="bills-summary">
                <AccorBlock className="bills-summary__container">
                    <AccorBlock className="bills-summary__col">
                        <H3 level ={3} palette={'white'} fontWeight ={'light'} className="bills-summary__heading">{AccorText}</H3>
                        <AccorBlock className="bills-summary__col bills-summary__col--align-right hide--md hide--lg">
                            
                        </AccorBlock>
                        <AccorSPAN>
                            Including
                            <strong> £12.00</strong>
                            out of plan spend
                        </AccorSPAN>
                    </AccorBlock>
                    <AccorBlock className="bills-summary__col bills-summary__col--align-right hide--sm">
                        <AccorSPAN className="heading heading--1 no-gutter--all">£52.00</AccorSPAN>
                    </AccorBlock>
                </AccorBlock>
            </AccorBlock>

            </AccorH3>
            <Collapse isOpened={myDashProp.Dashboard}>
                <AccorBlock className="accordion__content">Lorem ipsum dolor sit amet,  ipsum libero vulputate turpis, et cursus risus turpis
                 ac dolor. Integer fringilla urna at massa consequat, ac pellentesque leo consectetur. Nulla erat metus,
                  mollis non velit laoreet, venenatis commodo ipsum.
             </AccorBlock>
            
            </Collapse>
            </div>
  )
}
Accordian.propTypes = {
  accorChange: PropTypes.func.isRequired,
};

export default Accordian;

 // <Heading level ={3} palette={'white'} fontWeight ={'light'} style ={{"fontSize":"28px"}}>{AccorText}</Heading>
 //                <AccorSPAN className="accorbadge"/>
 //                  <Div>
 //                    <AccorSPAN className="chevron">
 //                      <AccorSPAN className="chevron__container accordion__chevron">
 //                        Including £12.00 out of plan spend
 //                      </AccorSPAN>
 //                      <span style={{"font-weight":"lighter", "margin-left":"2.7em", "font-size":"64px", "line-height":"72px"}}>£52.00</span>
 //                    </AccorSPAN>
 //                  </Div>



