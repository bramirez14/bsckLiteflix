var express = require('express');
var router = express.Router();
const multer= require('multer');
var path=require('path');

//const multer= require('multer');
const moviesController= require('../controller/moviesController');
const storage = multer.diskStorage({
  destination: path.join(__dirname,'../../public/upload'),
  filename:(req,file,cb)=>{
  cb(null,file.originalname);
  }
})
var upload = multer({ storage});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/movies',moviesController.allmovies);
router.post('/movies',upload.single("file"),moviesController.createmovies);


module.exports = router;
