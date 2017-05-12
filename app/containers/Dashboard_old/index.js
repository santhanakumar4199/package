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
import makeSelectDashboard from './selectors';
import messages from './messages';
import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { defaultAction ,mobileNumber } from './actions';
import { makeSelectLogin,makeSelectLocationState } from 'containers/Login/selectors';
import defaultSagaD from './selectors';
import {Img,List,ListItem,StyledBackground,Label,Input,Badge,Block,Button,Caption,Heading,HorizontalRule,StyledAlert,StyledSections,TextLinks,StyledButton,StyledBlock,StyledGrids,StyledTiles,StyledSlider,StyledBubble,Link,Chevrons,Device,LogoImage,EqualRows,StyledLink,Page,Spring,Accordian} from 'components';
import BgImage from './BgImage1.jpg';
import Carousel from 'nuka-carousel';


export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

   constructor(props) {
    super(props);
    this.props={
      test:''
    }
   // this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount(){
    const mobileNumber = defaultSagaD();

    const test = this.props.handleSubmit();
    console.log("getuserCheck5ntest",test);
  }

  render() {

    const panCen = {margin: "auto",width:"560px","background-color":"white","box-shadow": "1px 1px 7px 4px #d6d6d6",height: "360px"}
    const alginChart = {"margin-left":"100px"}
    const lblfont = {"font-size":"24px"}
    const divback = {"background-color": "#eee","margin-top": "8px","border-radius":"6px"}
    const divbackunder = {"background-color": "#eee","margin-top": "8px","border-radius":"6px","margin-top":"30%"}
    const AccordianContainer = ({accorChange,props}) => <Accordian accorChange {...props}/>
    const bubblestyleone ={ "marginTop":"0","fontSize":"28px","marginBottom":"0","color":"#fff"};
    const bubblestyletwo ={ "color":"#CCC","display":"block","marginBottom":"10px"};
    const Mybutton = {"marginRight":"20px","cursor":"pointer", "backgroundColor":"#cacaca"};
    //const breadcrumbsStyle ={ "display": "inline-block", "boxSizing": "border-box", "textAlign": "-webkit-match-parent"​};
    const comment = {
                      arrow: '',
                      text: 'I hope you enjoy learning React!',
                      author: {
                        name: 'Hello Kitty',
                        avatarUrl: 'http://placekitten.com/g/64/64'
                      }
                    };

    return (
      <Block>
      
        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Accordian</Heading>
          <Block>
        
            <Accordian myDashProp={this.props} />

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Alert</Heading>
          
          <Block>
            <StyledAlert alertType="valert">
              <StyledAlert alertType ="myalert">
                <StyledAlert alertType="alertone">
                  <p>shankar</p>
                </StyledAlert>
                <StyledAlert alertType="alerttwo">
                  <p> Whoops! Something wrong! </p> 
                </StyledAlert>
              </StyledAlert>
            </StyledAlert>
          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Background</Heading>
          <Block>
        
            <StyledBackground BgImageURL={BgImage} bgText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse pretium, massa quis mollis dapibus, ipsum libero vulputate turpis, et cursus risus turpis ac dolor. Integer fringilla urna at massa consequat, ac pellentesque leo consectetur. Nulla erat metus, mollis non velit laoreet, venenatis commodo ipsum." />

          </Block>
        </Block>


        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Breadcrumbs</Heading>
          <Block>
        
            <StyledSections sectionType="bread">
             <List ordered={true}>
             <TextLinks linkType="linkbody" children="Home" href="www.google.com"></TextLinks>
                     
               </List>
               <List ordered={true}>
                  >
                     
               </List>
               <List ordered= {true}>
                <TextLinks   children=" Shop"></TextLinks>
               </List>
             
            
             </StyledSections>

          </Block>
        </Block>  

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Bubble</Heading>
          <Block>

            <StyledBubble type="styleone">
              <StyledBubble type="styletwo">
                <h4 style={bubblestyleone}>Title here</h4>
                <span style={bubblestyletwo}>User here</span>
                <p style={{"margin":"0","color":"#fff"}}>Message here</p>
              </StyledBubble>
            </StyledBubble>

            <StyledBubble type="styleone">
              <StyledBubble type="stylethree">
                <h4 style={{"color":"#666"}}>Title here</h4>
                <span style={bubblestyletwo}>User here</span>
                <p style={{"color":"#333"}}>Message here</p>
              </StyledBubble>
            </StyledBubble>

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Bundles</Heading>
          <Block>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Buttons</Heading>
          <StyledBlock>

          <StyledBlock>
        
        <StyledButton colID="primary">Primary Button</StyledButton>
         <StyledButton colID="secondary">Secondary Button</StyledButton>
          <StyledButton colID="tertiary">Tertiary Button</StyledButton>

        </StyledBlock>
        
            <StyledBlock>
              <StyledBlock type="dark">
                <StyledButton colID="primarydark">Primary Button</StyledButton>
                <StyledButton colID="secondarydark">Secondary Button</StyledButton>
                <StyledButton colID="tertiarydark">Tertiary Button</StyledButton>
              </StyledBlock >
            </StyledBlock>
            <StyledBlock >
              <StyledButton colID="disabled">Disabled</StyledButton>
              <StyledBlock type="dark">
                <StyledButton colID="disableddark">Disabled</StyledButton>
              </StyledBlock>
            </StyledBlock>
            <StyledBlock>
              <StyledButton colID="full">Full Width Button</StyledButton>
            </StyledBlock>
          </StyledBlock>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Carousel</Heading>
          <StyledBlock>
          abcd
        <Carousel>

            <Img src="http://4.bp.blogspot.com/-sU6NdxfWvmI/UPfGTEx9IdI/AAAAAAAAB6E/h-ta-YXjWrU/s1600/zoozoo_wallpaper_11_1024x768.jpg"/>
              <Img src="http://1.bp.blogspot.com/-mxIAY80zenU/UPfGP1NR0wI/AAAAAAAAB5s/kRhgwsTfnLo/s1600/zoozoo_wallpaper_03.jpg"/>
              <Img src="http://3.bp.blogspot.com/-mCGVdKv2OYU/UPfGG-06wEI/AAAAAAAAB4Q/CUJO-9bFgp4/s1600/1024x768_New_007.jpg"/>
              <Img src="http://http://1.bp.blogspot.com/-OenlKNwpQI8/U24NmtXU0qI/AAAAAAAAGQ8/I1qc3lbi9BA/s1600/zoozoo-vodafone-wallpaper-6.jpg"/>
              <Img src="http://3.bp.blogspot.com/-0p4SIUOy3uo/TdIiLezQ1tI/AAAAAAAABCI/xgbSTgBTdno/s1600/3g_super_wall.jpg"/>
              <Img src="http://www.timepass69.com/uploads/photos//2010/March/vodafone_zoozoo_wallpapers1.jpg"/>

        </Carousel>
            

          </StyledBlock>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Chevrons</Heading>
          <Block>

            <Chevrons>
              <StyledLink>
                <Heading>
                  Heading
                </Heading>
              </StyledLink>
            </Chevrons>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Colours</Heading>
          <Block>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Device</Heading>
          <Block>

            <Device>
              <StyledLink> 
                <LogoImage/>
              </StyledLink>
            </Device>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Dialogs</Heading>
          <Block>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Equal Rows</Heading>
          <Block>
        
        <EqualRows>
          <StyledButton buttonType='buttonone' style={Mybutton}></StyledButton>
          <StyledButton buttonType='buttonone' style={Mybutton}></StyledButton>
          <StyledButton buttonType='buttonone' style={Mybutton}></StyledButton>
        </EqualRows>
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Forms</Heading>
          <Block>
        
            

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Grids</Heading>
          <Block>
          <StyledBlock >
             <StyledGrids>
                  <StyledGrids gridType="left">
                  

                  </StyledGrids>
                  <StyledGrids gridType="right">



                  </StyledGrids>



                  </StyledGrids>
            </StyledBlock>
          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Headings</Heading>
          <Block>
        
            <Heading level={1} align={'center'} palette={'success'}>Heading 1, center, success </Heading>    

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Hello</Heading>
          <Block>
        
          

          </Block>
        </Block> 

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Hello icons</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Lists</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Media</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Page</Heading>
          <Block>
        
          <Page>Its a Page</Page>
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Rating</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Sections</Heading>
          <Block>
            <StyledBlock>
            <StyledSections sectionType="outer">
            <StyledSections sectionType="inner">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            </StyledSections>
            </StyledSections>
             </StyledBlock>
              <StyledBlock>
            <StyledSections sectionType="outer">
            <StyledSections sectionType="colour">
            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
            </StyledSections>
            </StyledSections>
            </StyledBlock>

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Simple tabs</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Slider</Heading>
          <Block>
        
            <StyledBlock>
              <StyledSlider sliderType="base" >
                <StyledSlider  sliderType="container">
                  <StyledSlider sliderAlign="top" sliderType="sides" sliderPosition="first">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab</StyledSlider>
                    <StyledSlider  sliderAlign="top" sliderType="sides" >Neque porro quisquam.</StyledSlider>
       
                      <StyledSlider sliderAlign="top" sliderType="sides" >Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</StyledSlider>
       
                      <StyledSlider sliderAlign="top"  sliderType="sides" sliderPosition="last">Quis autem vel eum iure reprehenderit qui in ea voluptate.</StyledSlider>
                </StyledSlider>
              </StyledSlider>
            </StyledBlock>

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Springs</Heading>
          <Block>
        
            <Spring maxwidth={'medium'}>Medium Spring</Spring>
            <Spring maxwidth={'normal'}>Normal Spring</Spring>
            <Spring maxwidth={'small'}>Small Spring</Spring>

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Tables</Heading>
          <Block>
        
            

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Text links</Heading>
          <Block>
        
            <StyledBlock>
              <TextLinks children="Standalone Link"></TextLinks>
            </StyledBlock>  
             <StyledBlock>
                This is a paragraph of text containing  <TextLinks  linkType ="linkbody" children="a body copy link Link"></TextLinks> element.
             </StyledBlock> 
             <StyledBlock>
              <StyledBlock type= "dark">
                <TextLinks linkType ="darkback" children="Line on a dark background"></TextLinks>
              </StyledBlock>   
             </StyledBlock > 
             
             <StyledBlock>
               <StyledBlock type="dark">
                <TextLinks linkType ="linebody" children="Body copy link on a dark background"></TextLinks> 
              </StyledBlock>
             </StyledBlock>
          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Tiles</Heading>
          <Block>
        
            <StyledBlock>
        <StyledTiles>
        <StyledTiles tileType="left">
        <StyledTiles tileType="leftcontent">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</StyledTiles>
        </StyledTiles>


        <StyledTiles tileType="right">
        <StyledTiles tileType="rightcontent">Etiam lorem ex, aliquam vel fermentum id, vehicula non ipsum. Quisque efficitur ornare felis, non luctus turpis viverra vitae. </StyledTiles>
        </StyledTiles>
        </StyledTiles>
        </StyledBlock>

          </Block>
        </Block>

        <Block style={{padding: "10em"}}>
          <Heading level ={2}>Trumps</Heading>
          <Block>
        
            

          </Block>
        </Block>

        
      </Block>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),

});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: (evt) => {
     const  test =  dispatch(defaultAction());
     console.log("testtesttest",test);
    },

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
