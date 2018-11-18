
const express = require('express');
const AppService = require('../generic/app-service');  
const router = express.Router();

// I am using async because I need await later
router.post('/', async (req, res, next) => {
  
  try {
    // I'm awaiting the result of my save operation
    const createResult = await AppService.create(req.body.githubUrl);
     // Return the created object as result
    return res.status(201).json({ success: createResult });
  } catch(err) {  
          // Make sure that this is a validation error and send it back to the caller
          if (err) {
            return res.status(400).json({ error: err.message });
          }
          // This is an unexpected error, so pass it on
          return next(err);
  }
});

module.exports = router;
 