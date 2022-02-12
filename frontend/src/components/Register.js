import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../service/api';
import '../App.css';

class Register extends Component {

    defaultState = { 
        username: '',
        email: '',
        password: ''
    }

    constructor(){
        super();
        this.state = this.defaultState
     }

     handleSubmit = () => {
        register(this.state)
     }

    render() {
        return (
        <div>
            <form className='form' onSubmit={this.handleSubmit}>
                <h3>Register</h3>
                <input type='text' name='username' value={this.state.username} required
                onChange={e => this.setState({username: e.target.value})} placeholder='username' /> <br />
                <input type='email' name='email' value={this.state.email} required
                onChange={e => this.setState({email: e.target.value})} placeholder='email' /> <br /> 
                <input type='password' name='password' value={this.state.password} required
                onChange={e => this.setState({password: e.target.value})} placeholder='password' /> <br />
                <button>Submit</button>
                <hr />
                <p>Already have an account? <Link to='/login'>Login here</Link></p>
            </form>
        </div>
        )
    }
}
export default Register