import React, { Component } from 'react';
import SingleContact from './SingleContact'
import '../App.css'

class ContactList extends Component {
  render() {
    return (
        <div className='contacts'>
            Your Contact List
            {
                this.props.contacts.map((contact, index) => {
                    return <div key={index}>
                        <SingleContact 
                            contact={contact}
                            // onDelete={this.props.onDelete}
                            // onEdit={this.props.onEdit}
                            index={index} />
                    </div>
                })
            }
        </div>
    )
  }
}

export default ContactList;
