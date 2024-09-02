import React, { Component } from 'react';

import Logo from './logo';
import SearchBar from './search-bar';
import RecentPost from './recent-post';

export default class Home extends Component {


  handleSearchBarSubmit(query) {
    console.log("try to handle form submit", query);
    this.props.history.push('/results');
  }


  render() {
    return (
      <div className='app'>
        <Logo/>
        <SearchBar onSubmit={(query) => this.handleSearchBarSubmit(query)}/>
        <RecentPost/>
      </div>
    );
  }
}
