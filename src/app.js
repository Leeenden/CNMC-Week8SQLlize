const yargs = require("yargs");
const { sequelize } = require("./db/connection");
// imports for crud functions
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movie/movieMethods");
// import tables 
const Movie = require("./movie/movieTable");
const User = require("./movie/userTable");
// Associations

// Users
User.hasMany(Movie);
// Movie
Movie.belongsTo(User);

// main CLI function
const app = async (yargsObj) => {
    try {
        await sequelize.sync();
        if (yargsObj.add) {
            // add movie to database
            await addMovie({title: yargsObj.title, actor: yargsObj.actor, rating: yargsObj.rating}, {userName: yargsObj.userName});
            console.log(`Success, added ${yargsObj.title} to the db. `);
        } else if (yargsObj.list) {
            //list all movies
            console.log(await listMovies());
            // console.log("List function completed.");
        } else if (yargsObj.update){
            //state new/update first 
            await updateMovie({newtitle: yargsObj.newtitle, title: yargsObj.title});
              //log the changes
        } else if (yargsObj.delete){
            // delete all movies
            await deleteMovie({title: yargsObj.title});
            console.log(`Success, deleted ${yargsObj.title}`);
        } else {
            // do something
            console.log("Incorrect command");
        }
    } catch (error) {
        console.log(error);
        
    }
};

app(yargs.argv);

// ================node commands======================
// USING create = node src/app.js --add --title="SpiderMan" --actor="Tom Holland"
// USING destroy = node src/app.js --delete --title="SpiderMan"
// USING findALL = node src/app.js --list

// update working out
// USING fixed variables = node src/app.js --update --newTitle="Kung Fu Panda Updated" --title="Kung Fu Panda" 
// USING one fixed, one variable = node src/app.js --update --newtitle="AntMan Updated" --title="AntMan"
