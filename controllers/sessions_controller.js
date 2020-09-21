const bcrypt = require('bcrypt');
const express = require('express');
const User = require ('../models/users.js');
const sessions = express.Router();

sessions.get('/login', (req, res) => {
  res.render('sessions/new.ejs',
  {
    currentUser: req.session.currentUser
  })
})

sessions.post('/', (req, res) => {
  User.findOne({username: req.body.username}, (err, foundUser) => {
    if(err){
      console.log(err);
      //database has error
      res.send('oops the db had an error')
    }else if(!foundUser){
      //if username isn't found
      res.send('<a href="/sessions">Sorry! No user found</a>')
    }else{
      //username is found in database
      if(bcrypt.compareSync(req.body.password, foundUser.password)){
        //password and username match
        req.session.currentUser = foundUser
        res.redirect('/home')
      }else{
        //password and username dont match
        res.send('<a href="/sessions">Sorry! password does not match</a>')
      }
    }
  })
})

sessions.delete('/login', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/home')
  })
})

module.exports = sessions
