const express = require('express');
const passport = require('passport');
const session = require('express-session');
const connectDb = require('./config/db');

const app = express();

// let dbConnected = false;  // Initialize the flag

// Session setup
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: true
}));

// Passport setup
app.use(passport.initialize());
app.use(passport.session());

// app.use(dbMiddleware);

app.get('/', (req, res) => {
    res.send('Hello, world! MongoDB is connected.');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,async () => {
  await connectDb()
  console.log(`Server running on port ${PORT}`);
});
