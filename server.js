const express = require(`express`); // import Express.js
const PORT = process.env.PORT || 3001;
const app = express(); // instantiate server
const apiRoutes = require(`./routes/apiRoutes`);
const htmlRoutes = require(`./routes/htmlRoutes`);

app.use(express.urlencoded({ extended: true })); // parse incoming string or array data
app.use(express.json()); // parse incoming JSON data
app.use(express.static(`public`)); // make all files in the 'public' directory accessible without having a specific server endpoint created for them
app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);

app.listen(PORT, () => { // make server listen
  console.log(`API server now on port ${PORT}!`);
});