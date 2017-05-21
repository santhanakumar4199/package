/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION,DAILER_VAL
} from './constants';

export function defaultAction(accState) {
  return {
    type: DEFAULT_ACTION,
    accState
  };
}

export function getDailerVal(dailerVal) {
  return {
    type: DAILER_VAL,
    dailerVal
  };
}
