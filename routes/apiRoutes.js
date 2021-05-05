const fs = require('fs');
// var uniqid = require('uniqid');
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const storedNotes = require('../db/db.json');
var express = require('express');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(storedNotes));

    app.post('/api/notes', (req, res) => {
        const addNote = req.body;
        addNote.id = uuidv4();
        
        storedNotes.push(addNote);
        fs.writeFile(__dirname + '/../db/db.json', JSON.stringify(storedNotes), (err) => {
            err ? console.log(err) : console.log('Note Successfully Saved');
            
   
        });
        res.json('../db/db.json');
    })
}

