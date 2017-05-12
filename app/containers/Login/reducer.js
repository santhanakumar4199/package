/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';

import {
  CHANGE_MOBILENUMBER,
  CHECK_USER,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR
} from './constants';

const initialState = fromJS({
	mobileNumber: '',
  userData: {
    repositories: false,
  },
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_MOBILENUMBER:
      //return state;
      return state
        .set('mobileNumber', action.mobileNumber.replace(/@/gi, ''));
    case CHECK_USER:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['userData', 'repositories'], false); 
    case LOAD_REPOS_SUCCESS:
      return state
        .setIn(['userData', 'repositories'], action.repos)
        .set('loading', false);
    case LOAD_REPOS_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);        
    default:
      return state;
  }
}

export default loginReducer;
