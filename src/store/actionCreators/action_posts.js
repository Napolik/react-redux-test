import ACTION_POSTS from '../actions/action_posts';

function action_posts(value) {
	return {
		type: ACTION_POSTS,
		posts: value
	};
}

export default action_posts;