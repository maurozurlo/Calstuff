const express = require('express');
const router = express.Router()
const moment = require('moment-timezone')
const fs = require('fs')
const ical = require('ical-generator')

// @desc Generate Calendar
// @route GET /

router.get('/cal', async (req, res) => {
    // Generate temp file
    const date = req.query.date
    const tempfile = 'temp-event.ics'
    fs.writeFile(`./public/${tempfile}`, createIcal(date), function (err) {
        if (err) throw err
        console.log('File is created successfully.');
    })

    res.render('cal', { link: tempfile })
})

const createIcal = (date) => {
    const cal = ical({ name: 'iCal test' })
    cal.domain('https://maurozurlo.com/')
    cal.createEvent({
        start: date,
        end: date,
        summary: 'Example Event',
        description: 'It works ;)',
        location: 'my room',
        timezone: moment.tz.guess(date),
        url: 'https://maurozurlo.com/'
    })

    return cal.toString()
}

module.exports = router
