const Movies = require('../models/Movies');

module.exports ={
    postMovies: async (req, resp)=>{
        const filename = req.file.filename;
        const data = req.body;
        data.image = filename;
        const newMovie = await Movies.create(data);
        resp.send();
    },

    getMovies: async (req, resp)=>{
        const data = await Movies.findAll()
        resp.send(data);
    },

    deleteMovie: async (req, resp) =>{
        const { id } = req.params;
        await Movies.destroy({
            where: { id }
        });

        resp.send();
    }
};
