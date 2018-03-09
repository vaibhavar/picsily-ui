/**
 * serviceUtil
 * One source for all API interactions
 */

import { config } from './config';

module.exports = {
	setToken: function(sToken) {
		if (localStorage) {
			// Store in localStorage
			localStorage.setItem('token', sToken);
		} else {
			// TODO:  Store in cookie ?
		}
	},
	getToken: function() {
		return localStorage.getItem('token');
	},
	/**
	 * gets Data from service
	 * @param  {String} sUrl URL of service
	 * @return {Promise}      Response promise
	 */
	getDataFromService: function(sUrl) {
		// Concatenate base url to sUrl
		let baseUrl = config.API_BASE_URL;
		sUrl = `${baseUrl}${sUrl}`;
		return fetch(sUrl, {
			headers: { 'x-access-token': this.getToken() },
		});
	},

	postFormDataToService: function(sUrl, oData) {
		// Concatenate base url to sUrl
		let baseUrl = config.API_BASE_URL;
		sUrl = `${baseUrl}${sUrl}`;

		var oFormData = new FormData();

		for (let key in oData) {
			oFormData.append(key, oData[key]);
		}

		return fetch(sUrl, {
			method: 'POST',
			credentials: 'include',
			redirect: 'follow',
			headers: { 'x-access-token': this.getToken() },
			body: oFormData,
		});
	},

	/**
	 * Posts data to service
	 * @param  {String} sUrl  URL of service
	 * @param  {Object} oData Data to be sent
	 * @return {Promise}       Response promise
	 */
	postDataToService: function(sUrl, oData) {
		// Concatenate base url to sUrl
		let baseUrl = config.API_BASE_URL;
		sUrl = `${baseUrl}${sUrl}`;

		let oFormData = new URLSearchParams();

		for (let key in oData) {
			oFormData.append(key, oData[key]);
		}

		return fetch(sUrl, {
			method: 'POST',
			credentials: 'include',
			redirect: 'follow',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'x-access-token': this.getToken(),
			},
			body: oFormData,
		});
	},

	loginUser: function(username, password) {
		return this.postDataToService('/users/login', { username: username, password: password })
			.then(oData => oData.json())
			.then(
				function(oUserData) {
					this.setToken(oUserData.token);
					return oUserData;
				}.bind(this)
			);
	},
	logoutUser: function() {
		this.setToken('');
	},
	registerUser: function(firstname, lastname, username, password) {
		return this.postDataToService('/users/register', {
			firstname: firstname,
			lastname: lastname,
			username: username,
			password: password,
		});
	},

	uploadPhoto: function(file) {
		return this.postFormDataToService('/photos/upload', {
			file: file,
		});
	},
};
