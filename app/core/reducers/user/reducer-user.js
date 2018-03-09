const initialState = { loggedIn: true, user: {} };

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_USER_FULFILLED':
			return { ...state, loggedIn: !action.payload.error.status };
		case 'GET_USER_REJECTED':
			return { ...state, loggedIn: !action.payload.error.status };
		case 'LOGIN_USER_FULFILLED':
			return { ...state, loggedIn: true, user: action.payload };
		case 'REGISTER_USER_FULFILLED':
			return { ...state, loggedIn: true, user: action.payload };
		case 'LOGOUT_USER_FULFILLED':
			return { ...state, loggedIn: false, user: {} };
		default:
			return state;
	}
}
