const Git = require('../models/Git');

class AppService {
  // No async here because we will just return 
  // the promise and won't await the result
  static create(url) {
    const gitObj = new Git();
    gitObj.githubUrl = url;
    return gitObj.save();
  }
}

module.exports = AppService;