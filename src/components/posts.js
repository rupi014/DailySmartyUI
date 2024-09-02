import React, { Component } from 'react';

class Posts extends Component {
  render() {
    return (
        <li className='recent-post'>
            <div className='recent-post__title'>
                {this.props.title}
            </div>
        </li> 
    );
  }
}   

export default Posts;