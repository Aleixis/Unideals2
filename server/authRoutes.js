// authRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('./db'); //assume you have already set the db.js

router.post('/login', async (req, res) => {
  // get Email and password
  const { Email, password } = req.body;
  
  // check whether the user in database or not
  const client = await pool.connect();
  try {
    const userResult = await client.query('SELECT * FROM users WHERE Email = $1', [Email]);
    const user = userResult.rows[0];
    client.release();

    if (!user) {
      return res.status(401).json({ error: 'User does not exist' });
    }

    // check the password is correct
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
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

module.exports = router;