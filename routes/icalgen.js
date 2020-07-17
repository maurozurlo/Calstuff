const express = require('express');
const router = express.Router()
const moment = require('moment')
const ical = require('ical-generator')
const cal = ical({name: 'my first iCal'});
 
// overwrite domain
cal.domain();
 
cal.createEvent({
    start: moment(),
    end: moment().add(1, 'hour'),
    summary: 'Example Event',
    description: 'It works ;)',
    location: 'my room',
    timezone: 'Europe/Berlin',
    url: 'http://sebbo.net/'
});


// @desc Generate Calendar
// @route GET /

router.post('/cal', async (req, res) => {
    console.log(req.query.date)
    res.render('cal', {title:"My Blog"})
})


module.exports = router