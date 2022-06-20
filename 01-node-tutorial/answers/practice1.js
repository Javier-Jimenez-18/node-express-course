const os = require('os');
const fs = require('fs');
const sentence = require('./practice2');

fs.writeFile('./content/practice.txt', sentence, (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  fs.appendFile('./content/practice.txt', os.userInfo().username, (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  })    
});
