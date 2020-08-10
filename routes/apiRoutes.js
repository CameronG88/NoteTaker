const fs = require("fs");
const path = require("path")
const { v1: uuidv1 } = require("uuid");

module.exports = (app) => {

    // GET 
    app.get("/api/notes", (req, res) => {
        fs.readFile("db/db.json", "utf-8", (err, data) => {            
            res.json(JSON.parse(data));
        });
    });

    // api post function
    app.post("/api/notes", (req, res) => {
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            const notesArray = JSON.parse(data);
            const newNote = req.body;
            newNote.id = uuidv1();
            notesArray.push(newNote);
            fs.writeFileSync("db/db.json", JSON.stringify(notesArray), "utf8");
            res.json(notesArray);
        });
    });
    // api delete function
    app.delete("/api/notes/:id", (req, res) => {
        fs.readFile("db/db.json", "utf-8", (err, data) => {
            const noteData = JSON.parse(data);
            const deletedNote = noteData.filter(function (noteObj) {
                return noteObj.id !== req.params.id;
            });
            fs.writeFileSync("db/db.json", JSON.stringify(deletedNote), "utf8");
            res.json(deletedNote);
        });

    });
}