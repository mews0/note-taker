const router = require(`express`).Router();

router.get(`/api/notes`, (req, res) => {
  // Read the db.json file and return all saved notes as JSON
});

router.post(`/api/notes`, (req, res) => {
  // Receive new note to save on the request body
  // Add new note to the db.json file
  // Return new note to the client
  // Give each note a unique id when it's saved
});

router.delete(`/api/notes/:id`, (req, res) => {
  // Receive a query parameter containing the id of a note to delete
  // Read all notes from the db.json file
  // Remove the note with the given id property
  // Rewrite the notes to the db.json file
});

module.exports = router;