const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNub29wIiwiZW1haWwiOiJzbm9vb3BAZ21haWwuY29tIiwicGFzcyI6IiQyYiQxMCRFeXUvR2U5OVZrLlFIN1VLWFR1RGF1MHlhTGNoWEYyaW9zMHN0RTNJcUNNRUJlYi9ESFo4ZSIsImlhdCI6MTY0NDQxMjc4NX0.vy8f-lrlXx74Im9Kj5aCLJiM9yhrwSo5UdYEBa-VH3A'

export const getAllUsers = (callback) => {

    fetch('http://localhost:5000/users', {

        headers: {
            'Authorization': JSON.parse(localStorage.getItem("Token"))
        }

    })
    .then(res => res.json())
    .then(callback)
}

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



const user = {
    username: 'snoop',
    password: 'snoop'
}
