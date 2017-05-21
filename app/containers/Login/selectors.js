import { createSelector } from 'reselect';

/**
 * Direct selector to the login state domain
 */
const selectLoginDomain = () => (state) => state.get('login');

/**
 * Other specific selectors
 */


/**
 * Default selector used by Login
 */

const makeSelectLocationState = () => {
  
  let routingState;

  return (state) => {
    const routingState = createSelector(
		  selectLoginDomain(),
		  (loginState) => loginState.get('mobileNumber')
		);

    return routingState;
  };
};


const makeSelectLogin = () => createSelector(
  selectLoginDomain(),
  (loginState) => loginState.get('mobileNumber')
);

const makeSelectUserData = () => createSelector(
  selectLoginDomain(),

  (loginState) => loginState && loginState.get('userData') ? loginState.get('userData') :''
);


export default makeSelectLogin;

export {
  selectLoginDomain,
  makeSelectLogin,
  makeSelectLocationState,
  makeSelectUserData,
};
