const Movie= require('../models/MovieModel')

const getMovie = async () => {
    const data = await Movie.find();
    return data
}

const addMovie=async (params)=>{
    params.forEach(async (element) => {
        let movie= new Movie(element)
        await movie.save() 
    });
    
}



module.exports={addMovie, getMovie}