const router = require('express').Router();
const { createNewNotes, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db');


router.get('/notes', (req,res) => {
    
    res.json(notes);
});

router.post('/notes', (req,res) => {

    const note = createNewNotes(req.body, notes);

    res.json(note);
});

router.delete('/notes/:id', (req, res) => {
    
    const newNotes = deleteById(req.params.id, notes);

    res.json(newNotes);
    
});

module.exports = router;