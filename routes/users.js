const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log("User Request Time: ", Date.now());
    next();
  });

router.get('/', (req, res) => {
    console.log(req.url);
    res.send('This is the list of the users...')
})

router.post('/', (req, res) => {
    console.log(req.url);
    res.send('You just add another user...')
})

module.exports = router;