import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './search-bar';

class Results extends Component {
  render() {
    return (
      <div className="results">
        <Logo size={55}/>
        <SearchBar/>
      </div>
    );
  }
}

export default Results;