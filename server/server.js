const express = require('express');
const mongoose = require('mongoose');
const video = require('../routes/video');

const {videoRouter} = require('../routes/video');

const app = express();

try {
  mongoose.connect('mongodb://localhost:27017/stream-base', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, () => {
    console.log('Connected to database!');
  });
} catch {
  console.log('Could not connect to database!');
}

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/video-streamer', videoRouter);

const start = () => {
  app.listen(PORT, () => {
    console.log('Server runnning from port ', PORT);
  });
};

module.exports = {start};