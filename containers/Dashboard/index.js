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
import {Label,Input,Badge,Block,Button,Caption,Heading,HorizontalRule,Accordian,PostForm,Media,SimpleTabPannel,Dialer} from 'components';

export class Dashboard extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

   constructor(props) {
    super(props);
    this.props={
      test:''
    }
   // this.handlers = createHandlers(this.props.dispatch);
  }

  componentWillMount(){
    //this.props.accorChange();
    console.log("componentWillMount");
  }

  componentDidMount(){
    defaultAction(false);
    console.log("getuserCheck5ntest");
  }

  render() {
    console.log("this.propsthis.props",this.props);
    const panCen = {margin: "auto",width:"560px","background-color":"white","box-shadow": "1px 1px 7px 4px #d6d6d6",height: "360px"}
    const alginChart = {"margin-left":"100px"}
    const lblfont = {"font-size":"24px"}
    const divback = {"background-color": "#eee","margin-top": "8px","border-radius":"6px"}
    const divbackunder ={"width":"80%","margin":"auto"}
    const AccordianContainer = ({accorChange,props}) => <Accordian accorChange {...props}/>
    const comment = {
                      arrow: '',
                      text: 'I hope you enjoy learning React!',
                      author: {
                        name: 'Hello Kitty',
                        avatarUrl: 'http://placekitten.com/g/64/64'
                      }
                    };

    return (
      <Block style={divbackunder}>
        <Accordian myDashProp={this.props} />
        <Media/>
        <SimpleTabPannel/>
        <Dialer/>
        <Dialer/>
        <Dialer/>
      </Block>
    );
  }
}

Dashboard.propTypes = {
  dispatch: PropTypes.func.isRequired,
  handleSubmit:PropTypes.func.isRequired,
  accorChange:PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),

});

function  mapDispatchToProps(dispatch) {
  return {
    dispatch,
    handleSubmit: (evt) => {
     console.log("testtesttest");
    },
    accorChange:(props)=>{
      var aa = props.Dashboard ? props.Dashboard :false ;
      const  test = dispatch(defaultAction(!aa));
      console.log("props.Dashboard",props.Dashboard);
    }

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
