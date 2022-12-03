const fs = require('fs');
const path = require('path');
const notes = require('../db/db.json')


function newNotes(body, noteArray){
    const note = body;
    noteArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({noteArray}, null, 2)
      );
    return note;
}

function deleteNotes(id, notes) {
    let noteArray = notes.filter(el => {
      if (el.id == id) {
        return false
      } else {
        return true
      }
    })

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({noteArray}, null, 2)
      );
      return noteArray;
    }

module.exports = {newNotes, deleteNotes};