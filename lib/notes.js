const fs = require('fs');
const path = require('path');
// const notes = require('../db/db.json');

function createNewNotes (note, notesArray) {
    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));
    
    jsonData.notes.push(note);
    

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: jsonData.notes }, null, 2)
    );

    return note;
}

function deleteById(id) {
    
    // newNotes = notes.notes.filter(note => note.id !== id);
    
    // fs.writeFileSync(
    //     path.join(__dirname, '../db/db.json'),
    //     JSON.stringify({ notes: newNotes }, null, 2)
    // );
    

    // return newNotes;

    const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

    // console.log(jsonData);

    newNotesArray = jsonData.notes.filter(note => note.id !== id);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: newNotesArray }, null, 2)
    );

}

module.exports = { createNewNotes, deleteById };