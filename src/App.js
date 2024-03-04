import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  
static propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired
}

  // Search GitHub users 
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios
    .get(`https://api.github.com/search/users?q=${text}&client_id=${
      process.env.REACT_APP_GHFINDER_CLIENT_ID}
      &client_secret=${process.env.REACT_APP_GHFINDER_SECRET_ID}`)
    console.log(res.data);

    this.setState({ users: res.data.items, loading: false });
  }

  // Clear users from state
  clearUsers = () => this.setState({ users: [], loading: false });

  render() { 
    return (
    <nav className='App'>
      <Navbar title='Github Finder' icon='fab fa-github'/>
      <div className="container">
        <Search searchUsers={this.searchUsers} clearUsers={this.clearUsers} showClear={this.state.users.length > 0 ? true: false} />
        <Users loading={this.state.loading} users={this.state.users}/>
      </div>
    </nav>
    );
  }
}

export default App;
