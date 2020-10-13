const mongoose = require('mongoose');

const VideoSchema = mongoose.Schema({
  id: {type: String, required: true, unique: true},
  videoData: {type: Buffer, required: true, unique: true},
  uploader: {type: String, required: true, unique: true},
  uploadDate: {type: Date},
  thumbnail: {type: Buffer, default: null}
});

const Video = mongoose.model('Video', VideoSchema);

module.exports = { Video };