const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  github: {
    type: String,
    required: true
  },
  images: [
    {
        type: String,
        required: true
    }
  ],
  projectURL: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Project = mongoose.model('projects', ProjectSchema);
