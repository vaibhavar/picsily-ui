import React from 'react';
import { Link } from 'react-router-dom';
import TiCameraOutline from 'react-icons/lib/ti/camera-outline';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import s from './style.css';

class PictureUpload extends React.Component {
	render() {
		return (
			<FloatingActionButton className={s.addButton}>
				<TiCameraOutline size="20" color="#000" />
			</FloatingActionButton>
		);
	}
}

export default PictureUpload;
