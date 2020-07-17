const express = require('express');
const router = express.Router()

// @desc Index
// @route GET /

router.get('/', (req, res) => {
    res.render('index')
})

// @desc genCalendar


module.exports = router