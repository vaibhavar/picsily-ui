import React from 'react';
import { connect } from 'react-redux';

import { Card, CardHeader, CardMedia } from 'material-ui';

import s from './style.css';

function mapStateToProps(state) {
	return { ui_loading: state.user.ui_loading || state.photos.ui_loading };
}

function mapDispatchToProps(dispatch) {
	return {};
}

class SuggestedPhotos extends React.Component {
	render() {
		return (
			<div className={s.section}>
				{this.props.photos.map(oPhoto => (
					<Card>
						<CardHeader style={{ padding: '2px' }} title={oPhoto.userId.username} />
						<CardMedia>
							<img src={oPhoto.fileURL} />
						</CardMedia>
					</Card>
				))}
			</div>
		);
	}
}

SuggestedPhotos.defaultProps = {
	photos: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedPhotos);
