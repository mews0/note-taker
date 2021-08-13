const router = require(`express`).Router();
const { notes } = require(`../../db/db`); // import JSON file that contains database
const { findById, createNewNote, validateNote, deleteNote } = require(`../../lib/notes`);

router.get(`/notes`, (req, res) => {
  res.json(notes); // read the db.json file and return all saved notes as JSON
});

router.post(`/notes`, (req, res) => {
  req.body.id = notes.length.toString(); // set id based on what the next index of the array will be
  
  if (!validateNote(req.body)) { // if invalid, send 400 error back
    res.status(400).send(`The note is not properly formatted.`);
  } else { // else write notes data to JSON
    const note = createNewNote(req.body, notes);
    res.json(note);
  }
});

router.delete(`/notes/:id`, (req, res) => {
  const result = findById(req.params.id, notes);
  const note = deleteNote(result, notes);
  res.json(note);
});

module.exports = router;