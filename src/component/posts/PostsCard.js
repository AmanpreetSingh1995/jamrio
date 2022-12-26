import React from "react";

const PostCard = ({ id, image, owner, likes }) => {
	return (
		<div className="postcard">
			<div key={id}>
				<div className="owner">
					<img className="user" src={owner.picture} alt="users" />
					<p>{owner.firstName}</p>
					<p>{owner.lastName}</p>
				</div>
				<img className="post" src={image} alt="post" />
				<p>Likes: {likes}</p>
			</div>
		</div>
	);
};

export default PostCard;
