const express = require('express');
const router = express.Router()
const songsController = require('../controllers/songsController')

router.get('/getAll', songsController.getAllSongs)
router.get('/app',songsController.hello)
router.get('/getSong/:songId', songsController.getSong)
router.post('/add', songsController.addSong)
router.put('/update/:songId', songsController.updateSong)
router.delete('/delete/:songId', songsController.deleteSong)


module.exports = router