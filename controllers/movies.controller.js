const { getAll, upload } = require('../models/movies.model');

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

module.exports = { getMovies, uploadPhoto }