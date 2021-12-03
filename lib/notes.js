const fs = require('fs');
const path = require('path');


function createNewNotes (note, notesArray) {
    
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

module.exports = createNewNotes;