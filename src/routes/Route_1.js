const express = require('express');
const router = express.Router();
const isGithubUrl = require('is-github-url');

const GitModel = require('../models/Git');  

// I am using async because I need await later
router.post('/', async (req, res, next) => {
  
  const url = req.body.githubUrl.trim();
  
  if (!isGithubUrl(url)) {
    // Return the error via json
    return res.status(400).json({error: 'This is not a valid GitHub URL!'});
  }
  const gitObj = new GitModel();
  gitObj.githubUrl = url;
  
  try {
    // I'm awaiting the result of my save operation
    const saveResult = await gitObj.save();
    // Return the created object as result
    return res.status(201).json({success: saveResult});
  } catch(err) { // Something went wrong
    // Pass back the error
    return next(err);
  }
});

module.exports = router;