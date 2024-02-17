const express = require('express');
const router = express.Router()
const songsController = require('../controllers/songsController')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "../SongsUploaded")
    },
    filename: (req, file , cb)=>{
        const uniqueSuffix = Date.now() + '-'+Math.round(Math.random()* 1E9)
        cb(null, file.originalname +'-'+uniqueSuffix)
    } 
})

const upload = multer({storage})


router.get('/getAll', songsController.getAllSongs)
router.get('/app',songsController.hello)
router.get('/getSong/:songId', songsController.getSong)
router.post('/add', songsController.addSong)
router.put('/update/:songId', songsController.updateSong)
router.delete('/delete/:songId', songsController.deleteSong)


module.exports = router