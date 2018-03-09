const initialState = { loggedIn: true, user: {} };

export default function(state = initialState, action) {
	switch (action.type) {
		case 'GET_USER_FULFILLED':
			return { ...state, loggedIn: !action.payload.error };
		case 'GET_USER_REJECTED':
			return { ...state, loggedIn: !action.payload.error };
		case 'LOGIN_USER_FULFILLED':
			return { ...state, loggedIn: true, user: action.payload };
		case 'REGISTER_USER_FULFILLED':
			return { ...state, loggedIn: true, user: action.payload };
		default:
			return state;
	}
}
