const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newContact = new Contact({
      name,
      email,
      message
    });

    await newContact.save();
    
    // Print the message to the server terminal
    console.log('\n--- NEW MESSAGE RECEIVED ---');
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    console.log('----------------------------\n');

    res.status(201).json({ message: 'Message received! I\'ll get back to you soon ✨' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
