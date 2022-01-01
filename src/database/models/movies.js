'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    movie: DataTypes.STRING,
    title: DataTypes.STRING,
   

  }, { });
  movies.associate = function(models) {
    
  
   
  }
  return movies;
};
