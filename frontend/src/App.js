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
      user: ''
    }
  }

  componentDidMount = () => {
    const user = JSON.parse(localStorage.getItem('User'))
    if(user){
      this.setState({ user: user })
    }
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
            this.state.user === '' ? <Login /> : <HomePage user={this.state.user}
                                                           logout={this.logout} />
          }/> 
          <Route path='/login' element={<Login />}/> 
          <Route path='/register' element={<Register />}/> 
        </Routes>
      </BrowserRouter>
    )
  }
}
