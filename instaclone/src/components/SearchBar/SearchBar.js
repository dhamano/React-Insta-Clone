import React from 'react';
import instagramLogo from '../../img/instagram-logo.png';
import instagramWordmark from '../../img/instagram-wordmark.png';
import PropTypes from 'prop-types';

import './search.scss';

class SearchBar extends React.Component {
  state = {
    searchText: ''
  }

  changeInput = event => {
    this.setState({
      searchText: event.target.value
    }, () => this.props.filterOnChange(event, this.state.searchText))
    ;
  }

  render() {
    return (
      <div className="search-bar">
        <div className="instagram-logos">
          <img src={instagramLogo} className="logo" alt="Instagram Logo" />
          <img src={instagramWordmark} className="wordmark" alt="Instagram Wordmark" />
        </div>
        <input value={this.state.searchText} onChange={this.changeInput} type="text" name="search" id="search" placeholder="&#128269; search" />
        <div className="icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"></i>
        </div>
      </div>
    )
  }
}

SearchBar.propTypes = {
  filterOnChange: PropTypes.func
};

export default SearchBar;