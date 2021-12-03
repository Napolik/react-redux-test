import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Posts extends React.Component {
  state = {
    data: [] 
  }

componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let newData = res.data.slice(0,10);
      this.props.change_posts(newData);
      let result = [];

      this.props.posts.forEach(element => { 
        for (const [key, value] of Object.entries(element)) {
          if(key === 'title') {
            result.push(value);
          };
        }}
      );

      this.setState({ data : result});
      console.log(this.props.posts);
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
}

  render() {
    
    return (
      <ul className='ArticleContainer'>
         {
          this.state.data.length === 0 ?
            <p>Loading Posts...</p>
          :
            this.state.data.map((title, index) => (
                <li key={index}>
                  <Link to={`/post/${index + 1}`}>
                    {index + 1}. {title}
                  </Link>
                </li>
            ))
        }
      </ul>
    )
  }
  
}

export default Posts;