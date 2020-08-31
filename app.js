const express = require("express");
const app = express();


const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
const User = require('./models/User');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend / build'));
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
  // debugger
  const user = new User({
    handle: 'jim',
    email: 'jim@jim.jim',
    password: 'password'
  })
  user.save();
  res.send("Hello a/A!!")
});

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ 
  extended: false 
}));

app.use(bodyParser.json()); 

app.use("/api/users", users);
app.use("/api/tweets", tweets);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
