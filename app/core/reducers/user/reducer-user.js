const initialState = { loggedIn: false, user: {} };

export default function(state = initialState, action) {
	switch (action.type) {
		case 'LOGIN_USER_FULFILLED':
			return { loggedIn: true, user: action.payload };
		case 'REGISTER_USER_FULFILLED':
			return { loggedIn: true, user: action.payload };
		default:
			return state;
	}
}
