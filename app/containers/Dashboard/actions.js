/*
 *
 * Dashboard actions
 *
 */

import {
  DEFAULT_ACTION,
} from './constants';

export function defaultAction(accState) {
  return {
    type: DEFAULT_ACTION,
    accState
  };
}
