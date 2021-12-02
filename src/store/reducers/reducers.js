import { combineReducers } from 'redux';
import value_1 from './reducer_1';
import value_2 from './reducer_2'; 
import posts from './reducer_posts'; 

const reducers = combineReducers({
    value_1,
    value_2,
    posts
});

export default reducers;