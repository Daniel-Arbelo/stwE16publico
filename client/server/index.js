const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://abc123:Z7ZhekVI@vueexpress.bvdaajx.mongodb.net/?retryWrites=true&w=majority');

const createacount = require('./routes/api/createacount');

app.use('/api/createacount', createacount);

app.post('/signup', (req, res, next) => {
    const newUser = new User({
      gmail: req.body.gmail,
      usuario: req.body.usuario,
      contrasena: req.body.contrasena
    })
    newUser.save(err => {
      if (err) {
        return res.status(400).json({
          title: 'error',
          error: 'email in use'
        })
      }
      return res.status(200).json({
        title: 'signup success'
      })
    })
  })

app.post('/login', (req, res, next) => {
    
    User.findOne({ gmail: req.body.gmail }, (err, user) => {
      if (err) return res.status(500).json({
        title: 'server error',
        error: err
      })
      if (!user) {
        return res.status(401).json({
          title: 'user not found',
          error: 'invalid credentials'
        })
      }
      //incorrect password
      if (req.body.contrasena != user.contrasena) {
        return res.status(401).json({
          tite: 'login failed',
          error: 'invalid credentials'
        })
      }
      //IF ALL IS GOOD create a token and send to frontend
      let token = jwt.sign({userId: user._id}, 'secretkey');
      return res.status(200).json({
        title: 'login succes',
        token: token
      })
      
    })
  })

//grabbing user info
app.get('/user', (req, res, next) => {
    let token = req.headers.token; //token
    jwt.verify(token, 'secretkey', (err, decoded) => {
      if (err) return res.status(401).json({
        title: 'unauthorized'
      })
      //token is valid
      User.findOne({ _id: decoded.userId }, (err, user) => {
        if (err) return console.log(err)
        return res.status(200).json({
          title: 'user grabbed',
          user: {
            email: user.email,
            name: user.name
          }
        })
      })
  
    })
  })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server satarted on port ', port));