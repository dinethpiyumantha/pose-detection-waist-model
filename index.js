const express = require('express');
const app = express();
const router = express.Router();

// Sample array of data
const response = require("./response.json");

// Root route
router.get('/', (req, res) => {
  res.send("Api Service");
});

// Route to respond with the JSON array
router.post('/api/predict/keypoints', (req, res) => {
  res.status(200).send(response);
});

// Mount the router
app.use('/', router);

const port = process.env.PORT || 9001;

// Start the server
app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
