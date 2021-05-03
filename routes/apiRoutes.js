const fs = require('fs');
// var uniqid = require('uniqid');
const { v4: uuidv4 } = require('uuid');
// import { v4 as uuidv4 } from 'uuid';
const path = require('path');
const storedNotes = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

    app.post('/api/notes', (req, res) => {
        let addNote = req.body;
        addNote.id = uuidv4();
       console.log(uuidv4());
        storedNotes.push(addNote);
        fs.writeFile(path.resolve(__dirname, '../db/db.json'), JSON.stringify(addNote), err => {
            err ? console.log(err) : console.log ('Note Succefully Saved');
            res.json("../db/db.json");

        });
    });
};

