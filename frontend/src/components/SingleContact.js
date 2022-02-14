import React, { Component } from 'react';
import '../App.css'
import { Link as RouterLink } from 'react-router-dom'

class SingleContact extends Component {

    handleOnDelete = () => {
        this.props.onDelete(this.props.contact.contact_id)
    }  

    handleOnEdit = () => {
        this.props.changeEdit()
    }  

    render() {
        return (
            <div className='contact'>
                <h3>{this.props.index+1}. {this.props.contact.name}</h3>
                <h4>{this.props.contact.phone}</h4>
                <div style={{marginTop: 17}}>
                    <RouterLink to={{pathname: `/edit/${this.props.contact.contact_id}`, 
                    state: this.props.contact
                    }}>edit   </RouterLink>
                    <button onClick={this.handleOnDelete}> Delete</button>
                </div>
            </div>
        )
    }
}

export default SingleContact;
