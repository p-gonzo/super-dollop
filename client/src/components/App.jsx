import React from 'react';
import axios from 'axios';
import Post from './Post.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios.get('https://thewirecutter.com/wp-json/wp/v2/posts')
      .then((data) => {
        this.setState({
          posts: data.data
        }, () => {
          console.log(this.state);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>303 Software Technical Node + React Test</h1>
        <h2>Philip Gonzalez</h2>
      <ul>
        {this.state.posts.map((post) => <Post post={post} />)}
      </ul>
      </div>
    )
  }
}

export default App;