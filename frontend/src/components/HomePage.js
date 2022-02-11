import React, { Component } from 'react'
import { getContacts } from '../service/api'
import ContactList from './ContactList'
import '../App.css'

class HomePage extends Component {

    constructor() {
        super()
        this.state = {
            contacts: []
        }
    }

    setTheState = (data) => {
        this.setState({ contacts: data })
    }   

    componentDidMount(){
        getContacts(this.setTheState)
    }
    
    render() {
        return <div>
            <div className='header'>
                <div>Wellcome <b> {this.props.user} </b></div>
                <button onClick={this.props.logout}>log out</button>
            </div>
            
            {this.state.contacts.length > 0 ? <ContactList 
                                  contacts={this.state.contacts} 
                                //   onDelete={this.onDelete}
                                //   onEdit={this.onEdit}
                                  /> : 'No contacts'}
        </div>
    }

}

export default HomePage