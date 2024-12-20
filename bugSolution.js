const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might reject
  someAsyncOperation()
    .then((result) => {
      res.send('Success!');
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    });
});

function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate a condition that might cause rejection
    const success = Math.random() < 0.5;
    if (success) {
      resolve('Operation successful');
    } else {
      reject(new Error('Operation failed'));
    }
  });
}

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});