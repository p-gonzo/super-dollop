import React from 'react';
import moment from 'moment';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div className='post'>
        <h3 className='title'> <a href={this.props.post.link}>{this.props.post.title.rendered}</a> </h3>
        <p className='excerpt' dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}} /> 
        <p className='published'>{moment(this.props.post.date).fromNow()}</p>
      </div>
    )
  }
}

export default App;