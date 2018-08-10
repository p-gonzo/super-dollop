import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    //
  }

  render() {
    return (
      <div>
        <h3>{this.props.post.title.rendered}</h3>
        <p dangerouslySetInnerHTML={{__html: this.props.post.excerpt.rendered}} /> 
      </div>
    )
  }
}

export default App;