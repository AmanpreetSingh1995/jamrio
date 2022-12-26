import React from "react";
import Card from "./PostsCard";

const PostCardList = ({ data }) => {
	return (
		<div>
			{data.map((i) => {
				return (
					<Card key={i.id} image={i.image} owner={i.owner} likes={i.likes} />
				);
			})}
		</div>
	);
};

export default PostCardList;
