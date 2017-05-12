// import { take, call, put, select } from 'redux-saga/effects';

// Individual exports for testing

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CHECK_USER } from './constants';
import { defaultAction } from './actions';
import {browserHistory} from 'react-router';
import request from 'utils/request';
import { makeSelectLogin } from 'containers/Login/selectors';


export function* defaultSagaD() {

	const mobileNumber = yield select(makeSelectLogin());  
 	console.log("getuserChecksa",mobileNumber);
 	yield put(defaultAction(mobileNumber));
 	return mobileNumber
  // See example in containers/HomePage/sagas.js
}

// All sagas to be loaded


export default [
  defaultSagaD,
];
