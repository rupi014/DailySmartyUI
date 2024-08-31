import React, { Component } from 'react';

class RecentPost extends Component {
  render() {
    return (
      <div className="recent-post">
        <div className='recent-post__wrapper'>
            <div className='recent-post__heading'>Recent Post</div>
                <ul className='recent-post__post'>
                    <li>Recent Post 0</li>
                    <li>Recent Post 1</li>
                    <li>Recent Post 2</li>
                </ul>
        </div>
      </div>
    );
  }
}

export default RecentPost;  