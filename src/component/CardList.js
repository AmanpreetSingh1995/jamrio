import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
	return (
		<div>
			{data.map((i) => {
				return <Card key={i.id} image={i.image} owner={i.owner} />;
			})}
		</div>
	);
};

export default CardList;
