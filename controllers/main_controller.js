const express = require('express')
const router = express.Router();
const Clip = require('../models/clip_model.js')

//___________________
// Routes
//___________________

//Home Route
router.get('/home' , (req, res) => {
  Clip.find({}, (err, allClips) => {
    res.render('main/home.ejs',
    {
      clips: allClips
    });
  })
});

//Create Route
router.get('/add', (req, res) => {
  res.render('main/new.ejs')
})
router.post('/home', (req, res) => {
  Clip.create(req.body, (err, newClip) => {
    res.redirect('/home')
  })
})

//Edit Route
router.get('/edit/:id', (req, res) => {
  res.render('main/edit.ejs')
})

//Profile Route
router.get('/:user', (req, res) => {
  res.render('main/profile.ejs')
})


//Show Route
router.get('/:user/:id', (req, res) => {
  res.render('main/show.ejs')
})

//Delete Route
router.delete('/:user/:id', (req, res) => {

})


module.exports = router;
