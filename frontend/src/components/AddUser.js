import React, { Component } from 'react';
import { createContact } from '../service/api';

class AddUser extends Component {

    constructor(){
        super();
        this.state = {
            name: '',
            phone: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        createContact(this.state)
        window.location.href = '/'
        
    }

    render() {
    return (
    <form className='form' onSubmit={e => this.handleSubmit(e)}>               
        <h2>Add new contact</h2>
        <input name='name' value={this.state.name} placeholder='name' onChange={e => this.setState({name: e.target.value})} required/><br />
        <input name='phone' value={this.state.phone} placeholder='phone' onChange={e => this.setState({phone: e.target.value})} required/><br />
        <input type='submit' /> <input type='submit' value='Cancel' onClick={() => {window.location.href = '/'}}/>
    </form>
        )
    }
}

export default AddUser;
