import React from 'react';
import { connect } from 'react-redux';

import s from './style.css';

function mapStateToProps(state) {
	return { ui_loading: state.user.ui_loading || state.photos.ui_loading };
}

function mapDispatchToProps(dispatch) {
	return {};
}

class SuggestedPhotos extends React.Component {
	render() {
		return <div className={s.section} />;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedPhotos);
