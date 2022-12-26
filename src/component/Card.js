import React from "react";

const Card = ({ id, image, owner }) => {
	return (
		<div className="card">
			<div key={id}>
				<img className="post" src={image} alt="post" />
				<p>By: </p>
				<p>{owner.firstName}</p>
				<p>{owner.lastName}</p>
			</div>
		</div>
	);
};

export default Card;
