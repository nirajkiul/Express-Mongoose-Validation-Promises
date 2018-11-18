const mongoose = require('mongoose');
const isGithubUrl = require('is-github-url');

const gitSchema = mongoose.Schema({
  githubUrl: {
    type: String,
    required: true,
    unique: true,
    index: true,
    trim: true,
    lowercase: true,
    validate: { validator: isGithubUrl, message: 'This is not a valid GitHub URL!'},
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Git', gitSchema);