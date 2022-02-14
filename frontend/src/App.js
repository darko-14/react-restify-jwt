import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
      <Router>
        <Switch>
          <Route exact path='/' > {
            this.state.user === '' ? <Login onLogin={this.onLogin}/> : <HomePage user={this.state.user}
                                                           logout={this.logout} />
          }</Route>
          <Route exact path='/login' ><Login /></Route>
          <Route exact path='/register' ><Register /></Route>
          <Route exact path='/add' ><AddUser onAdd={this.onAdd}/></Route>
          <Route exact path='/edit/:id' ><EditUser/></Route>


        </Switch>
        </Router>
    )
  }
}
