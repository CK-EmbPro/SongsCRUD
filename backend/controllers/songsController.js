const express = require('express')
const SongModel = require('../model/songsModel')

const getAllSongs = async(req, res) =>{
    let allSongs;
    try {
        allSongs = await SongModel.find()
        res.send(allSongs)
        // console.log("all songs here")
    } catch (error) {
        res.send(error.message)
    //    return error.message
    }

}

const getSong = async(req, res) =>{
    let {songId} = req.params
    let song;
    try {
        song = await SongModel.findById(songId)
        res.send(song)
        // return song
    } catch (error) {
        res.send(error.message)
    }
}

const updateSong = async(req, res) =>{
    let {songId} = req.params
    let {title, artist, genre, albumName} = req.body
    let updated
    let updated2
    try {
         updated = await SongModel.findByIdAndUpdate(songId, {
            title, 
            artist, 
            genre, 
            albumName
        })

        updated.save()

        res.send(updated)
    } catch (error) {
        res.send(error.message)
        
    }

}

const addSong = async(req, res) =>{
    let {title, artist, genre, albumName} = req.body

    try {
        let todo = new SongModel({
           title,
           artist,
           albumName,
           genre
        })       
        let todos = await todo.save()
        res.send(todos)
        // console.log(todos)

    } catch (error) {
        // return error.message
        res.send(error.message)
    }
}

const deleteSong = async(req, res) =>{
    let {songId} = req.params
    let deleted
    try {
        deleted =  await SongModel.findByIdAndDelete(songId)
       if(deleted){
        res.send("deleted")
       }
    } catch (error) {
        res.send(error.message)
    }
}

const hello = (req, res) =>{
    res.send("hello world!")
}

module.exports = {
    getAllSongs,
    getSong,
    updateSong,
    addSong,
    deleteSong,
    hello
}