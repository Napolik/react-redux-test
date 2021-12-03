import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import COMPONENT_POSTS_W from './components/wrapComponents/component_posts_w'
import Nav from './components/nav/';
import Home from './components/home/';
import Post from './components/post/';

ReactDOM.render(
	<Provider store={store}>
			<Router>
			<Nav/>
			<hr />
	  			<Routes>
					<Route path='/' element={<Home/>} />
					<Route exact path='/posts/' element={<COMPONENT_POSTS_W/>} />
					<Route path='/post/:id' element={<Post/>} />
	  			</Routes>
			</Router>
	</Provider>
	,
document.getElementById('root'));

/*
					
					<Route path='/profile' element={<Profile/>} />
					<Route path='/login' element={<Login/>} />
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();