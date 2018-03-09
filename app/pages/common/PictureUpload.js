import React from 'react';
import { connect } from 'react-redux';

import TiCameraOutline from 'react-icons/lib/ti/camera-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import s from './style.css';
import { uploadPhoto } from '../../core/actions/photos';

function mapStateToProps(state) {
	return {
		photos: state.photos.photos,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		uploadPhoto: oFile => {
			dispatch(uploadPhoto(oFile));
		},
	};
}

class PictureUpload extends React.Component {
	constructor(props) {
		super(props);
		this.handlePictureUpload = this.handlePictureUpload.bind(this);
		this.onFabClick = this.onFabClick.bind(this);
	}

	onFabClick() {
		this.input.click();
	}

	handlePictureUpload(ev) {
		var oFile = this.input.files[0];
		this.props.uploadPhoto(oFile);
		// Reset input
		this.input.value = '';
	}

	render() {
		return (
			<span>
				<input
					onChange={this.handlePictureUpload}
					ref={inp => {
						this.input = inp;
					}}
					className={s.fileInput}
					type="file"
					accept="image/*"
				/>
				<FloatingActionButton onClick={this.onFabClick} className={s.addButton}>
					<TiCameraOutline size="30" color="#000" />
				</FloatingActionButton>
			</span>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureUpload);
