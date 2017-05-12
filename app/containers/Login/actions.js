/*
 *
 * Login actions
 *
 */

import {
  CHANGE_MOBILENUMBER,
  CHECK_USER,
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS_ERROR,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function getMobileNo(mobileNumber) {
  return {
    type: CHANGE_MOBILENUMBER,
    mobileNumber,
  };
}

export function checkUser() {
  return {
    type: CHECK_USER,
  };
}

export function reposLoaded(repos, username) {
  return {
    type: LOAD_REPOS_SUCCESS,
    repos,
    username,
  };
}

export function repoLoadingError(error) {
  return {
    type: LOAD_REPOS_ERROR,
    error,
  };
}