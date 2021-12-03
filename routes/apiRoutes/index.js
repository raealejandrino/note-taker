const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { createNewNotes, deleteById } = require('../../lib/notes');
const { notes } = require('../../db/db');


router.get('/notes', (req,res) => {
    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../../db/db.json')));
    
    
    res.json(jsonData.notes);
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