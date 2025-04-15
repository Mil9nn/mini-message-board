const express = require('express')
const router = express.Router();

const messages = [
    { text: "Hey charles you there ?", user: "Amando", added: new Date() },
    { text: "Yeah tell me, what's goin on!", user: "Charles", added: new Date() },
];

router.get('/', (req, res) => {
    res.render('index', { title: "Mini MessageBoard", messages })
})

router.get('/new', (req, res) => {
    res.render('form', { title: 'New Message' })
})

router.post('/new', (req, res) => {
    const { messageUser, messageText } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect('/')
})

module.exports = router;