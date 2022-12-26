import CardList from "../component/CardList";

const Home = ({ posts }) => {
	return (
		<div>
			<CardList data={posts} />
		</div>
	);
};

export default Home;
