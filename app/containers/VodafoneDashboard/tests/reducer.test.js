
import { fromJS } from 'immutable';
import vodafoneDashboardReducer from '../reducer';

describe('vodafoneDashboardReducer', () => {
  it('returns the initial state', () => {
    expect(vodafoneDashboardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
