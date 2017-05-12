/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(mobileNumber) {
  return {
    type: DEFAULT_ACTION,
    na:mobileNumber
  };
}

