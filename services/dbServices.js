const { Video } = require('../models/video');
const id = require('shortid');

const insertVideo = async (data) => {
  try {
    await Video.insertMany({
      id: id.generate(),
      videoData: data.videoData,
      uploader: data.uploader,
      uploadDate: new Date().getTime(),
      thumbnail: null
    });
    return 200;
  } catch(e) {
    return 400;
  }
}

const getVideo = async (id) => {
  return await Video.find({ id: id });
}

const getVideos = async () => {
  return await Video.find({});
}

const deleteVideo = async (id) => {
  try {
    const response = await Video.deleteOne({ id: id });
    return response.deletedCount === 0 ? 400 : 200;
  } catch(e) {
    return 400;
  }
}

module.exports = { insertVideo, getVideo, getVideos, deleteVideo };