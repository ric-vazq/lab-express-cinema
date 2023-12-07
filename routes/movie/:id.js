const express = require('express');
const router = express.Router();

const Movie = require("../../models/Movie.model")
/* GET home page */
router.get('/movie/:id', (req, res, next) => {
    movieId = req.params.id;
    Movie.findById(movieId)
        .then(movieData => {
            console.log(movieData);
            res.render("movieData", movieData)
        })

});

module.exports = router;