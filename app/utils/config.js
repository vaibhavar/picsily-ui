function getUrlForEnvironment() {
	// Detecting the environment UI is running in
	if (window.location.hostname === 'localhost') {
		return 'http://localhost:2001';
	}
	return 'https://picsily-api.herokuapp.com';
}

module.exports = {
	config: {
		API_BASE_URL: getUrlForEnvironment(),
	},
};
