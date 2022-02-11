import React, { Component } from 'react';
import '../App.css'

class SingleContact extends Component {

    // handleOnDelete = () => {
    //     this.props.onDelete(this.props.contact.id)
    // }  
    // handleOnEdit = () => {
    //     this.props.onEdit(this.props.index)
    // }  

    render() {
        return (
            <div className='contact'>
                <h3>{this.props.index+1}. {this.props.contact.name}</h3>
                <h4>{this.props.contact.phone}</h4>
                <div style={{marginTop: 17}}>
                    <button className='btn'>Edit</button>
                    <button className='btn'>Delete</button>
                </div>
            </div>
        )
    }
}

export default SingleContact;
