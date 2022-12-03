const router = require('express').Router();
const { newNotes, deleteNotes } = require('../../lib/notes');
let { noteArray } = require('../../db/db.json');

router.post('/notes', (req, res) => {
    if (noteArray) {
        req.body.id = noteArray.length.toString();
    } else { req.body.id = 0 }
    res.json(newNotes(req.body, noteArray));
    console.log(noteArray)
});

router.get('/notes', (req, res) => {
    let results = noteArray;
    res.json(results);
});

router.delete('/notes/:id', async (req, res) => {
    const { id } = req.params
    noteArray = await deleteNotes(id, noteArray);
    res.json(noteArray);
});

module.exports = router;