const skipPatterns = require("./spelling-skipPatterns.js");

module.exports = {
  rules: {
    spelling: { 
      language: "en", 
      dictionary: ["en-us"], 
      suggestCorrections: true, 
      skipPatterns, 
    },
    "doubled-spaces": true
  }
};
