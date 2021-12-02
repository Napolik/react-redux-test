import React from 'react';
import axios from 'axios';

class Posts extends React.Component {
    state = {
        id:  '',
        title: '',
        body: '',
        data: []
      }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let newData = res.data.slice(0,5);
      this.props.change_posts(newData);

      this.props.posts.forEach(element => { 
        for (const [key, value] of Object.entries(element)) {
            if(key === 'title') {
                this.setState({ data : value});
            };
      }} );
      
      console.log(this.props.posts);
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render() {

    return (
        
      <div className='ArticleContainer'>
       
      </div>
    )
  }
  
}

export default Posts;