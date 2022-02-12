import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { login } from './service/api'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      user: JSON.parse(localStorage.getItem('User')) || ''
    }
  }

  setTheUser = user => {
    user = JSON.parse(localStorage.getItem('User'))
    this.setState({ user: user})
  }

  onLogin = (user) => {
    login(user, this.setTheUser);
  }

  logout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    this.setState({user:''})
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            this.state.user === '' ? <Login onLogin={this.onLogin}/> : <HomePage user={this.state.user}
                                                           logout={this.logout} />
          }/> 
          <Route path='/login' element={<Login />}/> 
          <Route path='/register' element={<Register />}/> 
        </Routes>
      </BrowserRouter>
    )
  }
}
