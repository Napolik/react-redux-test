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
        
      <div className='ArticleContainer'>
         {
          this.state.data.length === 0 ?
            <p>Loading Posts...</p>
          :
            this.state.data.map((post, index) => (
              <article key={index}>
                <h2>{index + 1}. {post}</h2>
              </article>
            ))
        }
      </div>
    )
  }
  
}

export default Posts;