import React, { Component } from 'react';
import { updateContact } from '../service/api';
import {withRouter} from 'react-router-dom'

class EditUser extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.location.state ? this.props.location.state.name : '',
            phone: this.props.location.state ? this.props.location.state.phone : ''
        }
        
    }

    componentDidMount() {
        console.log('id', this.props.match.params.id);
        console.log('state', this.props.location.state);
    }

    handleSubmit = (e) => {
        console.log('this',this.state)
        var contact = {
            id: this.props.match.params.id,
            name: this.state.name,
            phone: this.state.phone
        }

        updateContact(contact);
        window.location.href = '/'
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
    return (<div className='form'>
            <h2>Edit contact</h2>
            <input name='name' value={this.state.name} placeholder='name' onChange={this.handleChange} required/><br />
            <input name='phone' value={this.state.phone} placeholder='phone' onChange={this.handleChange} required/><br />
            <button onClick={this.handleSubmit} >Submit</button>
            <input type='submit' value='Cancel' onClick={() => {window.location.href = '/'}}/>
            </div>
        )
    }
}

export default withRouter(EditUser);