
const allowedWords = require("./spelling-allowdList.js")

module.exports = {
  rules: {
    spelling: { 
      language: "en", 
      dictionary: ["en"], 
      suggestCorrection: true, 
      skipPatterns: allowedWords },
    "doubled-spaces": true
  }
};
