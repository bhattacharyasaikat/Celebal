const fs = require('fs');

function readFileCallback(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return callback(err);
    }
    callback(null, data);
  });
}

function processDataCallback(data, callback) {
  setTimeout(() => {
    if (data) {
      callback(null, data.toUpperCase());
    } else {
      callback('No data to process');
    }
  }, 1000);
}

// Using the callback functions
readFileCallback('example.txt', (err, data) => {
  if (err) {
    return console.error(err);
  }
  processDataCallback(data, (err, processedData) => {
    if (err) {
      return console.error(err);
    }
    console.log(processedData);
  });
});
