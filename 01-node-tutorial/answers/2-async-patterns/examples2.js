// example of fs async pattern

// const { readFile } = require('fs')

// readFile('./content/first.txt', 'utf8', (err, data) => {
//     if (err) {
//         return 
//     } else {
//         console.log(data)
//     }
// })


// 1-block.js

const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // BLOCKING CODE !!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})


// Promise function

// const {readFile} = require('fs');

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })    
//     })
// }

// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))


// 2-await-pattern.js

const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        // const first = await readFilePromise('./content/first.txt', 'utf8');
        // const second = await readFilePromise('./content/second.txt', 'utf8');
        const first = await readFile('./content/first.txt', 'utf8');
        const second = await readFile('./content/second.txt', 'utf8');
        // await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS NUTS : ${first} ${second}`)
        await writeFile('./content/result-mind-grenade.txt', `THIS IS NUTS : ${first} ${second}`, { flag: 'a' })
        console.log(first, second);
    } catch (error) {
        console.log(error);
    }
}

start();
