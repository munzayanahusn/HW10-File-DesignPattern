const { getAll, upload, getId, addAMovie, deleteAMovie, updateAMovie } = require('../models/movies.model');

async function getMovies(req, res) {
    try {
        const {rows} = await getAll();
        res.json({data: rows})
    } catch (error){
        res.status(500).json({ message: error.message });
    }
}

async function uploadPhoto(req, res) {
    const file = req.file;
    const { id } = req.params;
    console.log({id}, {file});

    if (!file) {
        res.status(400).json({ message: 'Image is required' });
        return;
    }

    try {
        const result = await upload(id, file.filename)
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ err });
    }
}

async function getMoviesById(req, res) {
    const { id } = req.params;
    try {
        const {rows} = await getId(id);
        res.json({data: rows})
    } catch (error){
        res.status(500).json({ message: error.message });
    }
}

async function addMovies(req, res){
    const { title, genres, year} = req.body;
    console.log("addMovie ", {title}, {genres}, {year});

    if (!title || !genres || !year) {
        res.status(400).json({ message: 'Please provide title, genres, and year for the movie' });
        return;
    }

    try {
        const result = await addAMovie(title, genres, year);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function deleteMovie(req, res){
    const { id } = req.params;
    try {
        const result = await deleteAMovie(id);
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

async function updateMovie(req, res){
    const { id } = req.params;
    const { title, genres, year } = req.body;
    console.log("updateMovie ", {id}, {title}, {genres}, {year});

    if (!title || !genres || !year) {
        res.status(400).json({ message: 'Please provide title, genres, and year for the movie' });
        return;
    }

    try {
        const result = await updateAMovie(id, title, genres, year);
        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = { getMovies, uploadPhoto, getMoviesById, addMovies, deleteMovie, updateMovie }