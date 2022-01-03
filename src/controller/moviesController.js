const express = require("express");
const DB = require("../database/models");

//cloudinary
var cloudinary = require("cloudinary").v2;
//config cloudinary
cloudinary.config({
  cloud_name: "dzzsxoyp6",
  api_key: "973328191614544",
  api_secret: "DmCda1uEK_6uor42-4lR4ibrzVo",
});

const moviesController = {
  allmovies: async (req, res) => {
    try {
      const result = await DB.movies.findAll({order: [
        ['id', 'DESC'], 
        ],});
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  },
  createmovies: async (req, res) => {
    try {
      const { title } = req.body;
      const { path } = req.file;
      const URL = await cloudinary.uploader.upload(path);
      await DB.movies.create({
        title,
        movie: URL.secure_url,
      });
      res.send({
        msg: "Pelicula creada con exito",
        status: 200,
      });
    } catch (e) {
      res.send(e);
    }
  },
};
module.exports = moviesController;
