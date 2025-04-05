const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9._%+-]+@mbit\.edu\.in$/, 'Email must be @mbit.edu.in']
  },
  password: String,
  role: {
    type: String,
    enum: ['student', 'admin'],
    default: 'student'
  }
});

module.exports = mongoose.model('User', userSchema);
