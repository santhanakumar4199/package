import { createSelector } from 'reselect';

/**
 * Direct selector to the vodafoneDashboard state domain
 */
const selectVodafoneDashboardDomain = () => (state) => state.get('vodafoneDashboard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by VodafoneDashboard
 */

const makeSelectVodafoneDashboard = () => createSelector(
  selectVodafoneDashboardDomain(),
  //(substate) => substate.toJS()
);

export default makeSelectVodafoneDashboard;
export {
  selectVodafoneDashboardDomain,
};
