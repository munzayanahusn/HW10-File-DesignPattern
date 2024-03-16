const pool = require('../config/db');

async function getAll(){
    try {
        const result = await pool.query(
            `SELECT * FROM movies`
        );

        return result
    } catch(error) {
        throw error
    }
}

async function upload(id, filename){
    console.log('Uploading', id, filename)
    try {
        const result = await pool.query(
            `UPDATE movies SET photo = $1 WHERE id = $2`,
            [filename, id]
        );

        return result
    } catch(error) {
        console.log(error)
        throw error
    }
}

module.exports = { getAll, upload }