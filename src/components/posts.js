import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
        <li>
            {this.props.title}
        </li> 
    );
  }
}   

export default Posts;