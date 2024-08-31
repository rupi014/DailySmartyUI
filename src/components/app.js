import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPost from './recent-post';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar/>
        <RecentPost/>
      </div>
    );
  }
}
