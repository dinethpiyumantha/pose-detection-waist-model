const express = require('express');
const app = express();

// Sample array of data
const response = require("./response.json")

app.get('/', (req, res) => {
  res.send("Api Service")
})

// Route to respond with the JSON array
app.post('/api/predict/keypoints', (req, res) => {
  res.status(200).send(response);
});

const port =  process.env.PORT || 9001;

// Start the server
app.listen(port, () => {
  console.log('Server is running on port '+port);
});
