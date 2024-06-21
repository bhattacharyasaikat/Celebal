const fs = require('fs').promises;

function readFilePromise(filePath) {
  return fs.readFile(filePath, 'utf8');
}

function processDataPromise(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data.toUpperCase());
      } else {
        reject('No data to process');
      }
    }, 1000);
  });
}

// Using the async/await syntax
async function main() {
  try {
    const data = await readFilePromise('example.txt');
    const processedData = await processDataPromise(data);
    console.log(processedData);
  } catch (err) {
    console.error(err);
  }
}

main();
