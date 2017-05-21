/**
 * Gets the repositories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { CHECK_USER } from './constants';
import { reposLoaded, repoLoadingError } from 'containers/Login/actions';
import {browserHistory} from 'react-router';
import request from 'utils/request';
import { makeSelectLogin } from 'containers/Login/selectors';

/**
 * Github repos request/response handler
 */
export function* getuserCheck() {
  // Select username from store
  console.log("getuserCheck1s");

  const mobileNumber = yield select(makeSelectLogin());
  //const requestURL = `http://www.mocky.io/v2/591c4467110000ec02824f76`;
 const requestURL = ``;
  console.log("getuserCheck",mobileNumber);

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, mobileNumber));
    console.log("repos",repos);
    browserHistory.push('/dashboard');
  } catch (err) {
    browserHistory.push('/dashboard');
    yield put(repoLoadingError(err));
  }
}


/**
 * Root saga manages watcher lifecycle
 */
export function* userCheck() {
  console.log("userCheck");
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(CHECK_USER, getuserCheck);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  userCheck,
];
