import ACTION_POSTS from '../actions/action_posts';
import initialState from '../initialState';

export default function posts(state = initialState.posts, action) {
    switch(action.type) {
        case ACTION_POSTS: return action.posts;
        
        default: return state;
    }
}