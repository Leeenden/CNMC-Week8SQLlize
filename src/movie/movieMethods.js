const { sequelize } = require("../db/connection");
const Movie = require("./movieTable");
const User = require("./userTable");

// add movie function
exports.addMovie = async (movieObj, userObj ) => {
    //create one entry in the db
    try {
        //await model create method 
        await Movie.create(movieObj);
        await User.create(userObj);
        // log the intermmittent message
        console.log("Success, creating new entry.");
    } catch (error) {
        console.log(error)
    }
};
// list all movies function
exports.listMovies = async () => {
    // find movie object from db 
    try {
        console.log(await Movie.findAll()); 
        console.log(await User.findAll());
        } catch (error) {
        console.log(error);
    }
};

// update movie function by title
exports.updateMovie = async (movieObj) => {
    try {
        //await model update one method
        //state new update first, current update last
        await Movie.update({ 
            title: movieObj.newtitle }, 
        { where: { 
            title: movieObj.title 
        } 
    });
        console.log("Updated movie in DB.");
    } catch (error) {
        console.log(error)
    }
};

//delete movie function usign title
exports.deleteMovie = async (movieObj) => {
    //delete One movie from the db
    try {
        await Movie.destroy({
            //select current title 
            where: {
                title: movieObj.title 
            }
            });
            //log output
            console.log("Deleted Movie from DB.")
    } catch (error) {
        console.log(error)
    }
};
