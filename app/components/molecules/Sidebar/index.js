/**
*
* Sidebar
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Block, Heading, Button, } from 'components';
import userPeter from './user_peter.png';
import userelisa from './user_elisa.png';
import userbecky from './user_becky.png';
import summary from './summary.png';


const SidebarPanel = styled(Block)`
&.sidebar {
	display: table;
	position: relative;
	z-index: 0;
	 width: 25%;
    float: left;
	
}

&.sidebar__panel {
	display: table-cell;
	vertical-align: top;
	position: relative;
	width: 25%;
    padding-right: 1.25em;
    color: #FFF;
    background: #666;
    

}
&.service-tabs {
	margin-top: 2.5em;
	margin-bottom: 1.25em;
}
&.service-tabs__info {
	display: inline-block;
	vertical-align: middle;
}
&.spring {
    margin: 0 auto;
    max-width: 75em;
    min-width: 18.75em;
    padding: 0 0.625em;
    height: 100%;
}
&.sidebar__panel::before {
    left: -100vw;
    right: 0;
    background-color: #666;
}
`;
const SideNav = styled.nav``;

const TabInfo = styled.p`
&.no-gutter--all {
	margin: 0;
	color: #fff;
	
}
&.no-gutter--active {
	margin: 0;
		
}
`;
const Small = styled.small`
color: #fff;
`;
const SidebarButton = styled(Button)`
&.button--secondary {
	color: #FFFFFF;
	background-color: #666666;
}
&.button--secondary--dark {
	background-color: #AFAFAF;
	color: #333333;
}
&.button--full-width {
	display: block;
	width: 70%;
	text-align: center;
	 margin-right: 0em;
    margin-left: 40px;
    margin-top: 1.25em;
}
&.gutter--bottom {
	margin-bottom: 20px;
}

`;
const DL = styled.dl`
&.list {
	margin: 0;
	padding-left: 20px;
	color: #fff;
	 margin-right: 0px;
    margin-left: 40px
}
&.list--reset {
	list-style: none;
	padding-left: 0;
}
`;
const DT = styled.dt`
&.list__term {
	font-family: "VodafoneRegularBold";
	margin-top: 20px;
}
`;
const DD = styled.dd`
&.list__definition {
	margin: 0;
}
`;
const A = styled.a`
&.service-tabs__link--active {
    background: #EBEBEB;
    
    text-shadow: none;
    margin-right: -20px;
    padding-right: 30px;
    z-index: 1;
}
&.service-tabs__link--first {
    margin-top: 0;
}
&.service-tabs__link {
    color: #FFF;
    display: block;
    padding: 15px;
    position: relative;
    text-shadow: none;
    z-index: 0;
    margin-top: -1px;
    border-bottom: 1px solid #8F8F8F;
   
}
`;
const IMG = styled.img`
&.service-tabs__image {
	border-radius: 50%;
    border: 2px solid #FFF;
    box-shadow: 0 2px 5px rgba(0,0,0,.3);
    margin-right: 10px;
    width: 65px;
    height: 65px;
    display: inline-block;
    vertical-align: middle;
    max-width: 100%;
}`;

const Sidebar = ({children, ...props }) => {
  return (
  	<SidebarPanel className = "sidebar">
  		<div className = "spring">
	  	<SidebarPanel className = "sidebar__panel">
		  	<SidebarPanel className = "service-tabs">
		  		<SideNav style ={{"margin-right": "0px", "margin-left": "40px"}}>
		  			<A href= "#" className =" service-tabs__link--active  service-tabs__link service-tabs__link--first">
		  				<IMG className ="service-tabs__image" src = {userelisa} alt ="Alice image"/>
				  		<SidebarPanel className = "service-tabs__info">
			  				<TabInfo className ="no-gutter--active">
			  					Alice's Phone
			  				</TabInfo>
			  				<Small style = {{"color":"#333333"}}>074009301765</Small>
			  			</SidebarPanel>
		  			</A>
		  			<A href = "#" className ="service-tabs__link service-tabs__link--first ">
		  			<IMG className ="service-tabs__image" src = {userPeter} alt ="Peter image"/>
			  			<SidebarPanel className = "service-tabs__info">
			  				<TabInfo className ="no-gutter--all">
			  					Peter's Phone
			  				</TabInfo>
			  				<Small>074009301765</Small>
			  			</SidebarPanel>
		  			</A>
		  			<A href= "#" className ="service-tabs__link service-tabs__link--first ">
		  			<IMG className ="service-tabs__image" src = {userbecky} alt ="Becky image"/>
			  			<SidebarPanel className = "service-tabs__info">
			  				<TabInfo className ="no-gutter--all">
			  					Becky's Phone
			  				</TabInfo>
			  				<Small>074009301765</Small>
			  			</SidebarPanel>
		  			</A>
		  			<A href= "#" className ="service-tabs__link service-tabs__link--first">
		  			<IMG className ="service-tabs__image" src = {summary} alt ="Summary image"/>
			  			<SidebarPanel className = "service-tabs__info">
			  				<TabInfo className ="no-gutter--all">
			  					Summary
			  				</TabInfo>
			  				<Small>074009301765</Small>
			  			</SidebarPanel>
		  			</A>
		  		</SideNav>
		  		<SidebarButton className ="button--secondary  button--secondary--dark  button--full-width gutter--bottom">
		  			Manage Connections
		  		</SidebarButton>
		  		<Heading level ={3} palette={'white'} style ={{"margin-right": "0px", "margin-left": "40px"}}>My Vodafone Expectations</Heading>
		  		<DL className = "list list--reset">
		  			<DT className="list__term">Select a service</DT>
		  			<DD className="list__definition">Switch between services on your account to view their detailed usage.</DD>
		  			<DT className="list__term">All services</DT>
		  			<DD className="list__definition">View contributions to overall spend, previous bills and total average spend across all your services.</DD>
		  		</DL>
		  	</SidebarPanel>
		  </SidebarPanel>
		  </div>
	</SidebarPanel>
   
    	)
}


Sidebar.propTypes = {

};

export default Sidebar;
 