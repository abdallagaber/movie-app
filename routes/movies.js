const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const methodOverride = require('method-override');

const genreOptions = [
    "Action", "Romance", "Fantasy", "Drama",
    "Crime", "Adventure", "Thriller",
    "Sci-fi", "Family"
];


// Use method-override middleware
router.use(methodOverride('_method'));

// Route to list all movies
router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find({}).exec();
        res.render('index.ejs', { movies });
    } catch (err) {
        console.error(err);
    }
});

// Add new movie form
router.get('/add', (req, res) => {
    res.render('add.ejs', {genreOptions});
});

// Add new movie
router.post('/', async (req, res) => {
    // Parse form data and save to the database
    const {title, genre, year, rating} = req.body;
    try {
        const newMovie = new Movie({title, genre, year, rating});
        await newMovie.save();
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Edit movie form
router.get('/edit/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        const movie = await Movie.findById(movieId);
        if (!movie) {
            // Handle the case where the movie with the given ID is not found
            res.status(404).send('Movie not found');
        } else {
            res.render('edit.ejs', { movie, genreOptions});
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

// Route to update a movie (PUT request)
router.put('/edit/:id', async (req, res) => {
    const movieId = req.params.id;
    const {title, genre, year, rating} = req.body;

    try {
        const movie = await Movie.findByIdAndUpdate(
            movieId,
            {title, genre, year, rating},
            { new: true }
        );
        if (!movie) {
            res.status(404).send('Movie not found');
        } else {
            res.redirect('/');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }

});

// Route to delete a movie (DELETE request)
router.delete('/:id', async (req, res) => {
    const movieId = req.params.id;

    try {
        await Movie.findByIdAndRemove(movieId);
        res.redirect('/');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
