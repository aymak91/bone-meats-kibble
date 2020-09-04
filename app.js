const express = require("express");
const app = express();


const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const dogs = require("./routes/api/dogs");
const possibleMatches = require("./routes/api/matches/possible_matches")
const pendingMatches = require("./routes/api/matches/pending_matches")
const requestedMatches = require("./routes/api/matches/requested_matches")
const matches = require("./routes/api/matches/matches")
// const seed = require("./seeder")


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
}

mongoose
  .connect(db, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  // console.log(res);
  res.send("Hello a/A!!")
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.use(bodyParser.json()); 

app.use("/api/users", users);
app.use("/api/dogs", dogs);
app.use("/api/possible_matches", possibleMatches);
app.use("/api/matches", matches);
app.use("/api/pending_matches", pendingMatches);
app.use("/api/requested_matches", requestedMatches);

const port = process.env.PORT || 5000;

//seed mongo database
// seed();

app.listen(port, () => console.log(`Server is running on port ${port}`));
