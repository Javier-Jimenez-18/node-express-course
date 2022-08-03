// const os = require('os');
// const fs = require('fs');
// const sentence = require('./practice2');

// fs.writeFile('./content/practice.txt', sentence, (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   fs.appendFile('./content/practice.txt', os.userInfo().username, (err, result) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//   })    
// });


// fs = require('fs').promises;

// const makeFile = async() => {
//     try {
//         await fs.writeFile('./content/practice2.txt', 'This is the first line.\n');
//         for (let i=2; i<11; i++) {
//           await fs.writeFile('./content/practice2.txt', `This is line ${i}. `, { flag: 'a' });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// makeFile();

fs = require('fs').promises;

async function makeFile() {
  try {
      await fs.writeFile('./content/practice2.txt', 'This is the first line.\n');
      for (let i=2; i<11; i++) {
        await fs.writeFile('./content/practice2.txt', `This is line ${i}\n`, { flag: 'a' });
      }
  } catch (error) {
      console.log(error);
  }
};

makeFile();
