import React from 'react';
import instagramLogo from '../../img/instagram-logo.png';
import instagramWordmark from '../../img/instagram-wordmark.png';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import './search.scss';

const Wordmark = styled.img``;
const Logo = styled.img``;
const width = '20px';

const Header = styled.div`
  padding: 10px 30px;
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  ${Wordmark}, ${Logo} {
    max-height: 30px;
  }
  ${Logo} {
    margin-right: ${width};
    padding-right: ${width};
    border-right: solid 1px #000;
  }
  ${Wordmark} {
    margin-bottom: -8px;
  }
`;

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

  logout = event => {
    event.preventDefault();
    let userInfoVal = {
      loggedIn: false,
      username: '',
    };
    localStorage.setItem("instacloneLogin", JSON.stringify(userInfoVal));
    this.props.login();
  }

  render() {
    return (
      <Header className="search-bar">
        <div>
          <Logo src={instagramLogo}  alt="Instagram Logo" />
          <Wordmark src={instagramWordmark} alt="Instagram Wordmark" />
        </div>
        <input value={this.state.searchText} onChange={this.changeInput} type="text" name="search" id="search" placeholder="&#128269; search" />
        <div className="icons">
          <i className="far fa-compass"></i>
          <i className="far fa-heart"></i>
          <i className="far fa-user"><div onClick={this.logout}>Logout</div></i>
        </div>
      </Header>
    )
  }
}

SearchBar.propTypes = {
  filterOnChange: PropTypes.func
};

export default SearchBar;