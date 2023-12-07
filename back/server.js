const express = require('express');
const multer = require('multer');
const cors = require('cors')

const app = express();
const port = 5000;

// Multer setup - no storage destination specified
const upload = multer();

app.use(cors())
// Handle file upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  // Access the uploaded file details in req.file
  // You can process or save the file as needed (e.g., store in MongoDB)

  // Example: Send details of the uploaded file as a response
  res.status(200).send({
    message: 'File uploaded successfully',
    imgdata: {
      filename: req.file.originalname,
      mimetype: req.file.mimetype,
      binary:req.file.buffer.toString('base64'),
      size: req.file.size
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
