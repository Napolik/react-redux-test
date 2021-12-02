import React from 'react';

class Component_posts extends React.Component {
    
    componentDidMount(){
        //const content = 'this is me text';
        this.getTitle();
    }

    getTitle(){
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((json) => this.props.change_posts(json.title));       
    }
    
	render() {
		return (
			<>
				<p>{this.props.posts}</p>
			</>
		);
	}
}

export default Component_posts;