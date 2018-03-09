/**
 * Actions for user related APIs
 */

const USER_URL = '/users/loggedInUser';
const USER_LOGIN_URL = '/users/login';

import ServiceUtil from '../../../utils/serviceUtil';

export function getLoggedInUser() {
  return {
    type: 'GET_USER',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.getDataFromService(USER_URL)
        .then(oData => oData.json().then(oJsonData => resolve(oJsonData)))
        .catch(err => reject(err));
    }),
  };
}

export function loginUser(username, password) {
  return {
    type: 'LOGIN_USER',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.loginUser(username, password)
        .then(oUserData => {
          resolve(oUserData);
        })
        .catch(err => {
          reject(err);
        });
    }),
  };
}

export function registerUser(firstname, lastname, username, password) {
  return {
    type: 'REGISTER_USER',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.registerUser(firstname, lastname, username, password)
        .then(oUserData => {
          resolve(oUserData);
        })
        .catch(err => {
          reject(err);
        });
    }),
  };
}
