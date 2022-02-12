import React, { Component } from 'react'
import { getContacts } from '../service/api'
import { createContact } from '../service/api'
import { updateContact } from '../service/api'
import { deleteContact } from '../service/api'
import ContactList from './ContactList'
import ContactForm from './ContactForm';
import '../App.css'

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            contacts: [],
            currentIndex: -1
        }
    }

    setTheState = (data) => {
        this.setState({ contacts: data })
    }   

    componentDidMount(){
        getContacts(this.setTheState)
    }

    onAddorEdit = (contact) => {
        if(this.state.currentIndex === -1){
            createContact(contact);
            this.setState({contacts: [...this.state.contacts, contact]})
        }else{
            updateContact(this.state.contacts[this.state.currentIndex].contact_id);

            this.setState({ currentIndex: -1 })
        }
    }

    onEdit = (index) => {
        this.setState({ currentIndex: index })
    }

    onDelete = (id) => {
        deleteContact(id);
        var list = this.state.contacts.filter((contact) => contact.contact_id !== id);
        this.setState({ contacts:  list})
    }
    
    render() {
        return <div>
            <div className='header'>
                <div>Welcome <b> {this.props.user} </b> {this.state.currentIndex}</div>
                <button onClick={this.props.logout}>log out</button>
            </div>

            {this.state.currentIndex < 0 ? <ContactForm onAddorEdit={this.onAddorEdit}
                /> : null}

            {this.state.currentIndex > -1 ? <ContactForm onAddorEdit={this.onAddorEdit} 
                contact={this.state.contacts[this.state.currentIndex]}/> : null }

            {this.state.contacts.length > 0 ? <ContactList 
                                  contacts={this.state.contacts} 
                                  onDelete={this.onDelete}
                                  onEdit={this.onEdit}
                                  /> : 'No contacts'}
        </div>
    }

}

export default HomePage