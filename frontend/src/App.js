import React, { Component } from 'react'
import { getAllUsers } from './service/api'
import { login } from './service/api';


export default class App extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
  }


  componentDidMount(){
   // getAllUsers((data) => this.setState({users: data}))
  }

  deleteToken = () => {
    localStorage.removeItem("Token")
  }

  render() {
    return (
      <div>App
        {/* {
          this.state.users.map((v, i) => {
            return <li key={i}>{v.username}</li>
          })
        } */}
        <button onClick={this.deleteToken}>fetch</button>
        <ul>
       

      </ul>

      </div>
    )
  }
}
