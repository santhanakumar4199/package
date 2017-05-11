/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  accState:false
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('accState', action.accState);;
    default:
      return state;
  }
}

export default dashboardReducer;
