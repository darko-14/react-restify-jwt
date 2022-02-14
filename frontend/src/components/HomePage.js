import React, { Component } from 'react'
import { getContacts } from '../service/api'
import { deleteContact } from '../service/api'
import ContactList from './ContactList'
import { Link } from 'react-router-dom'
import '../App.css'

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            contacts: [],
        }
    }

    setTheState = (data) => {
        this.setState({ contacts: data })
    }   

    componentDidMount(){
        getContacts(this.setTheState)
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
                <Link to='/add' >add new</Link>
            </div>

            {/* {this.state.currentIndex > -1 ? <ContactForm onContactChange={this.onContactChange} 
                contact={this.state.contacts[this.state.currentIndex]}/> : null } */}

            {this.state.contacts.length > 0 ? <ContactList 
                                  contacts={this.state.contacts} 
                                  onDelete={this.onDelete}
                                  changeEdit={this.changeEdit}
                                  /> : 'No contacts'}
        </div>
    }

}

export default HomePage