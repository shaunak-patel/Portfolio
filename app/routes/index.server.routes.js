const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index', {title: 'Home'})
})

router.get('/about', (req, res, next) => {
    res.render('about', {title: 'About'})
})

router.get('/contactus', (req, res, next) => {
    res.render('contactus', {title: 'Contact us'})
})

router.get('/services', (req, res, next) => {
    res.render('services', {title: 'Services'})
})

module.exports = router;