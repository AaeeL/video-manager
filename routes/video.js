const videoRouter = require('express').Router();

const { insertVideo, getVideo, getVideos, deleteVideo } = require('../services/dbServices');

videoRouter.post('/video', async (req, res) => {
  const response = await insertVideo(req.body);
  res.status(response).end();
});

videoRouter.get('/video/:id', async (req, res) => {
  const response = await getVideo(req.params.id);
  res.send(response).end();
});

videoRouter.get('/video', async (req, res) => {
  const response = await getVideos();
  res.send(response).end();
})

videoRouter.delete('/video/:id', async (req, res) => {
  const response = await deleteVideo(req.params.id);
  res.status(response).end();
})

module.exports = { videoRouter };