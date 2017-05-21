/**
*
* Bubble
*
*/

import React from 'react';
import styled from 'styled-components';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Badge } from 'components'

const Div = styled.div`
&.dashboard-messages__bubble {
    max-width: 370px;
}
&.bubble--dark {
    background-color: #000;
  }
&.bubble--new {
    padding-left: 60px;
}
&.bubble {
    border-radius: 35px;
    display: inline-block;
    font-size: 20px;
    padding: 30px;
    position: relative;
    text-align: left;
    width: 100%;
    color: #FFF;
    display: table;
    margin: auto;
}
&.bubble--new::before {
    border-radius: 2px;
    background-color: #E60000;
    width: 4px;
    bottom: 30px;
    top: 30px;
    position: absolute;
    left: 30px;
}
`;
const BubbleBadge = styled(Badge)`
  &.bubblebadge {
    font-size: 0.1em;
    margin-left:28px;
    margin-top: 25px;
    margin-bottom: 25px;
    background-color: #E60000;
    border-radius: 10px;
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    top: 0;
    width: 5px;
  }
  `;
const H4 = styled.h4`
&.bubble__title {
    color: #FFF;
    margin-top: 0;
    font-size: 25px;
    margin-bottom: 0;
    padding: 0px 25px;
    font-weight: normal;
}`
;
const P = styled.p`
&.bubble__message {
    margin: 0;
    padding: 0px 25px;
}`
;
const SPAN = styled.span`
&.bubble__user{
    display: none;
    "max-height":"0px",
     opacity: "0"
  }
`;
const SVG = styled.svg`
&.icon {
    display: inline-block;
    fill: none;
    stroke: currentColor;
    stroke-width: .4em;
    vertical-align: middle;
}
&.hover {
    fill: none;
    stroke: currentColor;
}
&.icon--fill, .icon--fill:hover {
    stroke: none;
    stroke-width: 0;
    fill: currentColor;
}
&.bubble__tail {
    color: #3D3D3D;
    position: absolute;
    bottom: 0;
    left: -20px;
    width: 50px;
    height: 20px;
}
&.icon--thin {
    stroke-width: .15em;
}`
;

class Bubble extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Div className="bubble bubble--new dashboard-messages__bubble bubble--dark bubble--new::before">
        <BubbleBadge className="bubblebadge"/>
        <H4 className="bubble__title">Hello, Alice</H4>
        <SPAN className="bubble__user"></SPAN>
        <SVG aria-hidden="true" className="icon icon--fill icon--thin icon--fill:hover bubble__tail">

        </SVG>
        <P className="bubble__message">The current bill is ready</P>
      </Div>
    );
  }
}

Bubble.propTypes = {

};

export default Bubble;
