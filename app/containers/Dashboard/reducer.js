/*
 *
 * Dashboard reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  DAILER_VAL
} from './constants';

const initialState = fromJS({
  accState:false,
  dailerVal:'',
});

function dashboardReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('accState', action.accState);
    case DAILER_VAL:
       return state.set('dailerVal', action.dailerVal);
    default:
      return state;
  }
}


export default dashboardReducer;
