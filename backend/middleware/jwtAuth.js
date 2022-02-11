const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.header('Authorization');

    if(!token) return res.send('No token.');

    jwt.verify(token, 'secret', (err, decoded) => {
        if(err) return res.send(err);
        req.user = decoded;
        next();
    })

}