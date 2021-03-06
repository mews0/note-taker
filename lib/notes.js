const fs = require(`fs`); // import Node.js file system module
const path = require(`path`); // import Node.js path module

const findById = (id, notesArray) => {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
};

const createNewNote = (body, notesArray) => {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, `../db/db.json`),
    JSON.stringify({notes: notesArray}, null, 2)
  );
  return note;
};

const deleteNote = (body, notesArray) => {
  const note = body;
  notesArray.splice(notesArray.indexOf(note), 1);
  fs.writeFileSync(
    path.join(__dirname, `../db/db.json`),
    JSON.stringify({notes: notesArray}, null, 2)
  );
  return note;
};

const validateNote = (note) => {
  if (!note.title || typeof note.title !== `string`) {
    return false;
  }
  if (!note.text || typeof note.text !== `string`) {
    return false;
  }
  return true;
};

module.exports = {
  findById,
  createNewNote,
  deleteNote,
  validateNote
};