const restify = require('restify');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const jwtAuth = require('./middleware/jwtAuth')
const corsMiddleware = require('restify-cors-middleware2')


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'darko',
    database: 'list_of_contacts'
})

db.connect(error => {
    if(error) console.log(error);
    else console.log('Connected to the db.');
})

const app = restify.createServer(); 
app.use(restify.plugins.bodyParser());

const cors = corsMiddleware({
    origins: ['http://localhost:3000'],
    allowHeaders: ['Authorization']
})


app.pre(cors.preflight)
app.use(cors.actual)

app.listen(5000, () => {
    console.log('listening on port 5000');
})


app.get('/contacts', jwtAuth, (req, res) => {
    db.query(`SELECT * FROM users JOIN contacts ON users.user_id = contacts.user_id 
    WHERE users.username = '${req.user}'`, (error, rows) => {
        if(error) console.log(error);
        res.send(rows);
        console.log(`Contacts for ${req.user} queried.`);
    })
})

app.post('/contacts', jwtAuth, (req, res) => {
    db.query(`SELECT * FROM users WHERE username='${req.user}'`, (err, user) => {
        if(err) return res.send(err);
        db.query(`INSERT INTO contacts (name, phone, user_id) 
        VALUES ('${req.body.name}', ${req.body.phone}, ${user[0].user_id})`, (err, rows) => {
            if(err) return res.send(err);
            res.send(`Contact inserted.`);
        })
    })
    
})

app.put('/contacts/:id', jwtAuth, (req, res) => {
    db.query(`SELECT * FROM users WHERE username='${req.user}'`, (err, user) => {
        if(err) return res.send(err);
        db.query(`UPDATE contacts SET name='${req.body.name}', phone=${req.body.phone} 
        WHERE contact_id = ${req.params.id} AND user_id=${user[0].user_id}`, (err, rows) => {
            if(err) return res.send(err);
            res.send(`Contact updated.`);
        })
    })
})

app.del('/contacts/:id', jwtAuth, (req, res) => {
    db.query(`DELETE FROM contacts WHERE contact_id = ${req.params.id}`, (err, rows) => {
        if(err) return res.send(err);
        res.send(`Contact deleted.`);
    })
})

app.post('/login', (req, res) => {
    
    const { username, password } = req.body;
    db.query(`SELECT * FROM list_of_contacts.users WHERE username='${username}'`, (error, rows) => {
        if(rows.length < 1){
            return res.send('No such user.')
        }
        if(error) return console.log(error);
        else{
            bcrypt.compare(password, rows[0].password, (err, valid) => {
                if(valid){
                    const token = jwt.sign(username, 'secret');
                    res.send(token);
                }else{
                    res.send(err)
                }
            })
        }
    })

})

app.post('/register', (req, res) => {

    
    const { username, email,  password } = req.body;
    if(!username || !password || !email) {
        return res.send('All fields required.')
    }
    if(username.length < 3 || password.length < 3){
        return res.send('Fields must be longer than 2 characters.')
    }
            // query za if username already exists


    bcrypt.hash(password, 10, (error, pass) => {
        if(error) console.log(error);
        else {
            db.query(`INSERT INTO list_of_contacts.users (username, email, password) 
                VALUES ('${username}', '${email}', '${pass}')`)
            res.send('User registered.');
            // res.redirect('/login')
        }
    })




    
})