import React, { Component } from 'react';
import SingleContact from './SingleContact'
import '../App.css'

class ContactList extends Component {
  render() {
    return (
        <div className='contacts'>
            <div className='small'>
                <small>Name</small>
                <small>Phone</small>
                <small></small>
            </div>
            {
                this.props.contacts.map((contact, index) => {
                    return <div key={index}>
                        <SingleContact contact={contact} onDelete={this.props.onDelete} index={index} />
                    </div>
                })
            }
        </div>
    )
  }
}

export default ContactList;
