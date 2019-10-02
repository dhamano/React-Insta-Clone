import React from 'react';
import instagramLogo from '../../img/instagram-logo.png';
import instagramWordmark from '../../img/instagram-wordmark.png';

import './search.scss';

const SearchBar = props => {
  return (
    <div className="search-bar">
      <div className="instagram-logos">
        <img src={instagramLogo} className="logo" alt="Instagram Logo" />
        <img src={instagramWordmark} className="wordmark" alt="Instagram Wordmark" />
      </div>
      <input type="text" name="search" id="search" placeholder="&#128269; search" />
      <div className="icons">
        <i className="far fa-compass"></i>
        <i className="far fa-heart"></i>
        <i className="far fa-user"></i>
      </div>
    </div>
  )
}

export default SearchBar;