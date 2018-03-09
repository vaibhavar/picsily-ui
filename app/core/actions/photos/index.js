/**
 * Actions for photos related APIs
 */

const PHOTOS_URL = '/photos/';
const MY_PHOTOS_URL = '/photos/my';
const FEED_PHOTOS_URL = '/photos/feed';

import ServiceUtil from '../../../utils/serviceUtil';

export function uploadPhoto(oFile) {
  return {
    type: 'UPLOAD_PHOTO',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.uploadPhoto(oFile)
        .then(oData => oData.json().then(oJsonData => resolve(oJsonData)))
        .catch(err => reject(err));
    }),
  };
}

export function getAllPhotos() {
  return {
    type: 'GET_PHOTOS',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.getDataFromService(PHOTOS_URL)
        .then(oData => oData.json().then(oJsonData => resolve(oJsonData)))
        .catch(err => reject(err));
    }),
  };
}

export function getMyPhotos() {
  return {
    type: 'GET_MY_PHOTOS',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.getDataFromService(MY_PHOTOS_URL)
        .then(oData => oData.json().then(oJsonData => resolve(oJsonData)))
        .catch(err => reject(err));
    }),
  };
}

export function getFeedPhotos() {
  return {
    type: 'GET_FEED_PHOTOS',
    payload: new Promise((resolve, reject) => {
      ServiceUtil.getDataFromService(FEED_PHOTOS_URL)
        .then(oData => oData.json().then(oJsonData => resolve(oJsonData)))
        .catch(err => reject(err));
    }),
  };
}
