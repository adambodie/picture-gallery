import React from 'react';
import '../../styles/pictures.scss';

const PictureModal =({thisData}) => (
	<div className="row modal-body">
		<div className="col-sm-6">
			<img src={`https://s3-us-west-2.amazonaws.com/picture-gallery.bodiewebdesign.com/assets/${thisData.image}`} alt={thisData.title} className="img-fluid"/>
		</div>
		<div className="modal-description col-sm-6">
			<div className="modal-title">
				<h2>{thisData.title}</h2>
				<p>{thisData.description}</p>
			</div>
			<div className="modal-info">
				<p>Week of: {thisData.week}</p>
				<p>Location: {thisData.location}, {thisData.state}</p>
			</div>
		</div>
	</div>
)

export default PictureModal;



