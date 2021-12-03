const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json');

function createNewNotes (note, notesArray) {
    
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

function deleteById(id) {
    
    newNotes = notes.notes.filter(note => note.id !== id);
    
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotes }, null, 2)
    );
    

    
}

module.exports = { createNewNotes, deleteById };