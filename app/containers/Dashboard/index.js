/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard,{makeSelectdailerVal} from './selectors';
import messages from './messages';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { defaultAction ,mobileNumber,getDailerVal } from './actions';
import { makeSelectLogin,makeSelectLocationState,makeSelectUserData } from 'containers/Login/selectors';
import {Img,List,ListItem,Item,StyledBackground,Label,Table,TableRow,TableCell,Input,Dialer,Badge,Bundle,Block,Button,Caption,Heading
  ,HorizontalRule,StyledAlert,StyledSections,TextLinks,StyledButton,StyledBlock,StyledGrids,StyledTiles
  ,StyledSlider,StyledBubble,Link,Chevrons,Device,LogoImage,
  EqualRows,StyledLink,Page,Bubble,Spring,Accordian,Sidebar,Carousel} from 'components';
import BgImage from './hello-flower.jpg';

import { css } from 'styled-components';




export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

   constructor(props) {
    super(props);
    this.props={
      test:''
    }
   // this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount(){
    const test = this.props.handleSubmit();
    console.log("getuserCheck5ntest",test);
  }

  componentDidMount(){
    const dailerVal ={
      dailerVal1:80,
      dailerVal2:230,
      dailerVal3:360,
    };
    setTimeout( () => {
     this.props.dailerValue(dailerVal)
     console.log("setTimeout");
  },3000);
  }
 
  render() {

    console.log("this.props.dailerVal.dailerVal1",this.props.dailerVal.dailerVal1);

    const panCen = css `margin: "auto",width:"560px","background-color":"white","box-shadow": "1px 1px 7px 4px #d6d6d6",height: "360px"`
    const alginChart = {"margin-left":"100px"}
    const Listcolor = {"color":"#eee"}
    const lblfont = {"font-size":"24px"}
    const divback = {"background-color": "#eee","margin-top": "8px","border-radius":"6px"}
    const divbackunder = {"background-color": "#eee","margin-top": "8px","border-radius":"6px","margin-top":"30%"}
    const AccordianContainer = ({accorChange,props}) => <Accordian accorChange {...props}/>
    const bubblestyleone ={ "marginTop":"0","fontSize":"28px","marginBottom":"0","color":"#fff"};
    const bubblestyletwo ={ "color":"#CCC","display":"block","marginBottom":"10px"};
    const Mybutton = {"marginRight":"20px","cursor":"pointer", "backgroundColor":"#cacaca"};
    const BlockInline = {"padding-left":"20px","width": "75%","display":"inline-block"}; 
    const breadNew = {"background-color":"rgba(0,0,0,.6)","color":"#FFF","position":"relative"}; 
    const buttonStyle = {"border": "1px solid transparent", "font-size": "20px", "padding": "11px 37px", "text-align": "center"}
    const comment = {
                      arrow: '',
                      text: 'I hope you enjoy learning React!',
                      author: {
                        name: 'Hello Kitty',
                        avatarUrl: 'http://placekitten.com/g/64/64'
                      }
                    };

    return (
      <Page>
      
            <StyledBackground BgImageURL={BgImage}>
              <Carousel>
                <Bubble/>
                <Bubble/>
                <Bubble/>
              </Carousel>
              
              

            </StyledBackground> 
            
           <Block style={breadNew}>
            <StyledSections sectionType="bread">
                <List ordered={true} style ={Listcolor}>
                  <TextLinks linkType="linkbody" children="Home" href="https://www.google.com"></TextLinks>
                </List>
                <List ordered={true} style ={Listcolor}>
                >
                </List>
                  <List ordered= {true} style ={Listcolor}>
                  <TextLinks   children="My Vodafone"></TextLinks>
                </List></StyledSections>
            </Block> 
            
    
<Block Style ={{"backgroundColor":"#EBEBEB"}}>
          <Sidebar/>
  <Block style={BlockInline}>
   <Heading level ={1} align = {'center'}>Alice's phone</Heading>
      <Block style ={{"margin": "50px auto 0px"}}>
        <Dialer val={this.props.dailerVal.dailerVal1 ? this.props.dailerVal.dailerVal1 :360} />
        <Dialer val={this.props.dailerVal.dailerVal2 ? this.props.dailerVal.dailerVal2 :360} />
        <Dialer val={this.props.dailerVal.dailerVal3 ? this.props.dailerVal.dailerVal3 :360} />
    </Block>
    <Block>
        <Button style ={{"width":"20%"}} palette={'danger'} font={'primary'}>Buy more data</Button> 
        <Heading level={3} style={{"margin-left":"109px","vertical-align":"middle"}}><br></br><Heading level={4} style={{"font-weight":"lighter"}}></Heading></Heading>
        
      </Block>
    </Block>   
    
   <Block Style ={{"backgroundColor":"#EBEBEB"}}>
      <Block style={BlockInline}>
        <Block style={{"margin-right":"30px"}}>
          <Accordian myDashProp={this.props} >
          </Accordian>
        </Block>
        </Block>
    </Block>
  </Block>
        </Page>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  accorChange:PropTypes.func.isRequired,
  DailerVal:PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),
  dailerVal:makeSelectdailerVal(),
  UserData:makeSelectUserData(),


});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: (evt) => {
     const  test =  dispatch(defaultAction());
     console.log("testtesttest",test);
    },
     dailerValue:(dailerVal)=>{
      const  dailVal = dispatch(getDailerVal(dailerVal));
      console.log("props.Dashboard",dailVal);
    },
    accorChange:(props)=>{
      var aa = props.Dashboard ? props.Dashboard :false ;
      const  test = dispatch(defaultAction(!aa));
      console.log("props.Dashboard",props.Dashboard);
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
