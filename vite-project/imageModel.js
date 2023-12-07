const mongoose = require('mongoose');

// Create a schema for the image
const imageSchema = new mongoose.Schema({
  name: String, // Name of the image (optional)
  data: Buffer, // Buffer to store the image data
  contentType: String // Content type of the image (e.g., 'image/jpeg', 'image/png', etc.)
});

// Create a model based on the schema
const Image = mongoose.model('Image', imageSchema);

module.exports = Image; // Export the Image model for use in other files
