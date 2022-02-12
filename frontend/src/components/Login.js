import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../service/api';
import '../App.css';

class Login extends Component {

    defaultState = {
        username: '',
        password: ''
    }

    constructor(){
        super();
        this.state = this.defaultState
    }

    handleSubmit = (e) => {
        e.preventDefault();
        login(this.state)
        this.setState(this.defaultState)
    }

    render(){
        return <div>

            <form className='form' onSubmit={this.handleSubmit}>
                <h3>Login</h3>
                <input type='text' name='username' value={this.state.username} required
                onChange={e => this.setState({username: e.target.value})} placeholder='username' /> <br />
                <input type='password' name='password' value={this.state.password} required
                onChange={e => this.setState({password: e.target.value})} placeholder='password'/> <br /> 
                <button>Submit</button>
                <hr />
                <p>Don't have an account? <Link to='/register'>Register here</Link></p>
            </form>

        </div>
    }

}

export default Login