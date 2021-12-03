const router = require('express').Router();
const createNewNotes = require('../../lib/notes');
const { notes } = require('../../db/db');


router.get('/notes', (req,res) => {
    res.json(notes);
});

router.post('/notes', (req,res) => {

    const note = createNewNotes(req.body, notes);

    res.json(note);
});

module.exports = router;