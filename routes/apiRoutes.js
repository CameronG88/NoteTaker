const fs = require("fs");
const path = require("path")
const {v1: uuidv1 }= require("uuid");

module.exports = function (app) {

    // GET 
    app.get("/api/notes", (req, res) => {
        const noteData = JSON.parse(fs.readFileSync(`${__dirname} /../db/db.json`, "utf8"));
        res.json(noteData);
    });

    // api post function
    app.post("/api/notes", (req, res) => {
        const data = fs.readFileSync(`${__dirname}/../db/db.json`, "utf8");
        let notesArray = JSON.parse(data);
        const newNote = req.body;
        newNote.id = uuidv1();
        notesArray.push(newNote);
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(dataArray), "utf8");
        res.send("Your note has been created!")
    });

    // api delete function
    app.delete("/api/notes/:id", (req, res) => {
        let noteData = JSON.parse(fs.readFileSync(`${__dirname}/../db/db.json`, "utf8"));
        const deletedNote = noteData.filter(function (noteObj) {
            return noteObj.id !== req.params.id;
        })
        fs.writeFileSync(`${__dirname}/../db/db.json`, JSON.stringify(deletedNote));
        res.json(deletedNote);
    });

}