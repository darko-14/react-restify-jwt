import React, { Component } from 'react';

class ContactForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: props.contact ? props.contact.name : '',
            phone: props.contact ? props.contact.phone : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onContactChange(this.state)
        this.setState({name: '', phone: ''})
    }

    render() {
        return (
            <form className='form' onSubmit={e => this.handleSubmit(e)}>               
                <h2>Add new contact</h2>
                <input name='name' value={this.state.name}
                    placeholder='name' onChange={e => this.setState({name: e.target.value})}
                    required/><br />
                <input name='phone' value={this.state.phone}
                    placeholder='phone' onChange={e => this.setState({phone: e.target.value})}
                    required/><br />
                <input type='submit' />
            </form>
            )
    }
}

export default ContactForm;
