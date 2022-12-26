import PostCardList from "../component/posts/PostsCardList";

const Posts = ({ posts }) => {
	return (
		<div>
			<PostCardList data={posts} />
		</div>
	);
};

export default Posts;
