// authRoutes.js
const express = require('express');
const router = express.Router();
//const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db'); //assume you have already set the db.js

router.post('/login', async (req, res) => {
  //res.json({ message: 'Login route is working' });
  // get username and password
  const { email, password } = req.body;

  // check whether the user in database or not
  const client = await pool.connect();

  try {
    const userResult = await client.query('SELECT * FROM "User" WHERE email = $1', [email]);
    const user = userResult.rows[0];
    

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    // check the password is correct
    //const isMatch = await bcrypt.compare(password, user.password);
    if (password !== user.password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // create JWT token
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

    // send JWT token
    res.json({ message: 'Login successful', token });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  } finally {
    client.release();
  }
});

router.post('/signup', async (req, res) => {
  // get username , email and password
  const { username, email, password } = req.body;
  //console.log('Signup request received:', { username, email, password });


    // check whether the user in database or not
  const client = await pool.connect();
  //console.log('Connected to the database');

  try {
    const userResult = await client.query('SELECT * FROM "User" WHERE email = $1', [email]);
    //console.log('User query result:', userResult.rows);

    const existingUser = userResult.rows[0];

    if (existingUser) {
      //console.log('User already exists');
      return res.status(400).json({ error: 'User already exists' });
    }

    // create a new user in database
    //console.log('Creating a new user');

    await client.query('INSERT INTO "User" (username, email, password) VALUES ($1, $2, $3)', [username, email, password]);
    //console.log('New user created');
    res.json({ message: 'Signup successful' });

  } catch (error) {
    if (error.code === '23505') { 
      res.status(400).json({ error: 'Email already exists' });
    } else {
      console.error('Error during signup:', error);
      res.status(500).json({ error: 'Server error' });
    }
  } finally {
    console.log('Releasing database client');

    client.release();
  }
});

module.exports = router;