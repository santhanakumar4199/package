/**
*
* TabPannel
*
*/

import React, { Component, PropTypes } from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import styled from 'styled-components'

const SimpleTabs= styled(Tabs)`
&.rwt__tabs[data-rwt-vertical="true"] {
  display: flex;
}
`;
const SimpleTabList = styled(TabList)`
  background: #FFF;
  text-align:center;
&.rwt__tablist:not([aria-orientation="vertical"]) {
	border-bottom: 1px solid #ddd;
}

&.rwt__tablist[aria-orientation="vertical"] {
  display: flex;
	flex-direction: column;
	flex-shrink: 0;
	flex-grow: 0;
	border-right: 1px solid #ddd;
	margin-right: 1rem;
}
&.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:before {
  content: "";
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 2px;
	background-color: #E60000;
}
&.rwt__tablist:not([aria-orientation="vertical"]) .rwt__tab[aria-selected="true"]:after {
  border: 8px solid transparent;
	border-top-color: currentColor;
	display: block;
	height: 0;
	width: 0;
	-webkit-transform: rotate(0deg);
	    -ms-transform: rotate(0deg);
	        transform: rotate(0deg);
	color: #E60000;
	content: "";
	position: absolute;
	top: 100%;
	left: 50%;
	margin-left: -8px;
	z-index: 1;
}

&.rwt__tablist[aria-orientation="vertical"] .rwt__tab[aria-selected="true"]:after {
  right: -1px;
  top: 0;
  height: 100%;
}
`;
const SimpleTab = styled(Tab)`
&.rwt__tab {
	background: transparent;
	border: 0;
	font-family: inherit;
	font-size: inherit;
	padding: 1rem 1.5rem;
  transition: background 0.3s cubic-bezier(0.22, 0.61, 0.36, 1);
}

&.rwt__tab[aria-selected="false"]:hover,
.rwt__tab:focus {
  outline: 0;
  border:none;
  outline:none;
  color:red;
}

&.rwt__tab[aria-selected="true"] {
	position: relative;
  border:none;
  outline:none;
  color:#E60000;
}

&.rwt__tab[aria-selected="true"]:after {
	content: '';
	position: absolute;
  border:none;
  outline:none;
  color:#E60000;
}

`;



const SimpleTabPannel = ({...props}) => {

  return (
    <SimpleTabs defaultTab="basic-tab-one">
        <SimpleTabList>
          <SimpleTab tabFor="basic-tab-one">Tab 1</SimpleTab>
          <SimpleTab tabFor="basic-tab-two">Tab 2</SimpleTab>
          <SimpleTab tabFor="basic-tab-three">Tab 3</SimpleTab>
        </SimpleTabList>
        <TabPanel tabId="basic-tab-one">
          <p>Tab 1 content</p>
        </TabPanel>
        <TabPanel tabId="basic-tab-two">
          <p>Tab 2 content</p>
        </TabPanel>
        <TabPanel tabId="basic-tab-three">
          <p>Tab 3 content</p>
        </TabPanel>
      </SimpleTabs>
  )
}

SimpleTabPannel.propTypes = {

};

export default SimpleTabPannel;
