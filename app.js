const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://raghulmanokaransm:secretdbpassword@cluster0.5orel.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connected to MongoDB Atlas");
}).catch((err) => {
  console.error("Error connecting to MongoDB", err);
});

// Define Schema and Model
const FormSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});
const FormData = mongoose.model('FormData', FormSchema);

// API endpoint to submit form
app.post('/api/form', (req, res) => {
  const formData = new FormData(req.body);
  formData.save().then(() => res.status(200).send('Data saved successfully'))
    .catch(err => res.status(500).send(err));
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
