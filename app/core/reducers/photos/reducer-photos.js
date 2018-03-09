const initialState = { ui_loading: false, photos: [], my_photos: [], feed_photos: [] };

export default function(state = initialState, action) {
	switch (action.type) {
		case 'UPLOAD_PHOTO_PENDING':
			return {
				...state,
				ui_loading: true,
			};
		case 'UPLOAD_PHOTO_FULFILLED':
			return {
				...state,
				ui_loading: false,
			};
		case 'UPLOAD_PHOTO_REJECTED':
			return {
				...state,
				ui_loading: false,
			};
		case 'GET_PHOTOS':
			return {
				...state,
				ui_loading: true,
			};
		case 'GET_MY_PHOTOS':
			return {
				...state,
				ui_loading: true,
			};
		case 'GET_FEED_PHOTOS':
			return {
				...state,
				ui_loading: true,
			};
		case 'GET_PHOTOS_FULFILLED':
			return {
				...state,
				ui_loading: false,
				photos: action.payload,
			};
		case 'GET_MY_PHOTOS_FULFILLED':
			return {
				...state,
				ui_loading: false,
				my_photos: action.payload,
			};
		case 'GET_FEED_PHOTOS_FULFILLED':
			return {
				...state,
				ui_loading: false,
				feed_photos: action.payload,
			};
		default:
			return state;
	}
}
