import React, { Component } from 'react';
import './App.css';

class Text extends Component{
  render(){
    return <h1 style={{color: this.props.color}}>Hello, {this.props.value}</h1>
  }
}


class App extends Component {
  render() {
    return (
      <Text color="purple" value="Taylor"/>
    );
  }
}

export default App;
