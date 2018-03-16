// Dashboard
import React from 'react';
import { connect } from 'react-redux';

import { getPhotos, getFeedPhotos, getMyPhotos } from '../../core/actions/photos';
import { FlatButton, RaisedButton } from 'material-ui';
import { Card, CardHeader, CardMedia } from 'material-ui';

import SuggestedPhotos from '../common/SuggestedPhotos';
import s from './style.css';

function mapStateToProps(state) {
	return {
		photos: state.photos.photos,
		my_photos: state.photos.my_photos ? state.photos.my_photos : [],
		feed_photos: state.photos.feed_photos,
		ui_loading: state.photos.ui_loading,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		getPhotos: () => {
			dispatch(getPhotos());
		},
		getMyPhotos: () => {
			dispatch(getMyPhotos());
		},
		getFeedPhotos: () => {
			dispatch(getFeedPhotos());
		},
	};
}

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		// Load my added photos
		this.props.getMyPhotos();
	}

	render() {
		return (
			<div>
				<SuggestedPhotos />
				<div>
					{this.props.my_photos &&
						this.props.my_photos.map(oPhoto => (
							<div className={s.cardContainer}>
								<Card>
									<CardHeader title={oPhoto.userId.username} />
									<CardMedia>
										<img src={oPhoto.fileURL} />
									</CardMedia>
								</Card>
							</div>
						))}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
