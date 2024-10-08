import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Posts from './posts';

class RecentPost extends Component {

  componentDidMount() {
    this.props.fetchRecentPosts();
  }

  renderPosts = function() {
    const posts = this.props.recentPosts.map((post, index) => {
      if (index < 3) {
        return (
          <Posts {...post} key={index} />
        )
      }
      
  });
    return posts
  };
    

  render() {
    return (
      <div className="recent-post">
        <div className='recent-post__wrapper'>
            <div className='recent-post__heading'>Recent Post</div>
                <ul className='recent-post__post'>
                    {this.renderPosts()}
                </ul>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    recentPosts: state.posts.recentPosts
  }
}

export default connect(mapStateToProps, actions)(RecentPost);