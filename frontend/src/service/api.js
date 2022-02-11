
export const login = (user) => {
    fetch(`http://localhost:5000/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
        localStorage.setItem("Token", JSON.stringify(data.token));
    })

}

export const register = (user) => {
    fetch(`http://localhost:5000/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
}

export const getContacts = () => {
    fetch('http://localhost:5000/contacts', {
        headers: {
            'Authorization': JSON.parse(localStorage.getItem('Token'))
        }
    })
    .then(res => res.json())
}

export const createContact = (contact) => {
    fetch(`http://localhost:5000/contacts`, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem('Token'))
        },
        body: JSON.stringify(contact)
    })
    .then(res => res.json())
}

export const updateContact = (contact) => {
    fetch(`http://localhost:5000/contacts/${contact.id}`, {
        method: 'PUT',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem('Token'))
        },
        body: JSON.stringify(contact)
    })
    .then(res => res.json())
}

export const deleteContact = (id) => {
    fetch(`http://localhost:5000/contacts/${id}`, {
        method: 'DELETE',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(localStorage.getItem('Token'))
        }
    })
    .then(res => res.json())
}
