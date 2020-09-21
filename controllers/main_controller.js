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
      clips: allClips,
      currentUser: req.session.currentUser
    });
  })
});

//Create Route
router.get('/add', (req, res) => {
  res.render('main/new.ejs',
  {
    currentUser: req.session.currentUser
  })
})
router.post('/home', (req, res) => {
  Clip.create(req.body, (err, newClip) => {
    res.redirect('/home')
  })
})

//Edit Route
router.get('/edit/:id', (req, res) => {
  Clip.findById(req.params.id, (err, foundClip) => {
    res.render('main/edit.ejs',
    {
      clip: foundClip,
      currentUser: req.session.currentUser
    })
  })
})

router.put('/clip/:id', (req, res) => {
  Clip.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updateClip) => {
    res.redirect(`/clip/${req.params.id}`)
  })
})

//Profile Route
router.get('/user/:id', (req, res) => {
  res.render('main/profile.ejs',
  {
    currentUser:req.session.currentUser
  }
)
})


//Show Route
router.get('/clip/:id', (req, res) => {
  Clip.findById(req.params.id, (err, foundClip) => {
    res.render('main/show.ejs',
    {
      clip: foundClip,
      currentUser: req.session.currentUser
    })
  })
})

//Delete Route
router.delete('/clip/:id', (req, res) => {
  Clip.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/home')
  })
})


module.exports = router;
