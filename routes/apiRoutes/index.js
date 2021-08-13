const router = require(`express`).Router();
const { notes } = require(`../../db/db`); // import JSON file that contains database

router.get(`/notes`, (req, res) => {
  res.json(notes); // read the db.json file and return all saved notes as JSON
});

router.post(`/notes`, (req, res) => {
  req.body.id = notes.length.toString(); // set id based on what the next index of the array will be
  
  // validate data
     // if invalid, send 400 error back
     // else write notes data to JSON

  console.log(req.body);
  res.json(req.body); // req.body is where incoming content will be
});

router.delete(`/notes/:id`, (req, res) => {
  // Receive a query parameter containing the id of a note to delete
  // Read all notes from the db.json file
  // Remove the note with the given id property
  // Rewrite the notes to the db.json file
});

module.exports = router;