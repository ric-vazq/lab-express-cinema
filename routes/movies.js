const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")
/* GET home page */
router.get('/movies', (req, res, next) => {
    Movie.find()
        . then(moviesList => {
            console.log("Movies from DB: ", moviesList);
            res.render("movies", { moviesList })
        })
        .catch(err => {
            console.log(err);
        })
});

router.get('/movie/:id', (req, res, next) => {
    movieId = req.params.id;
    Movie.findById(movieId)
        .then(movieData => {
            console.log(movieData);
            res.render("movieData", movieData)
        })

});

module.exports = router;