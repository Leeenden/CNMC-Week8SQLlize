const yargs = require("yargs");
const { sequelize } = require("./db/connection");
// imports for crud functions

const app = async = (yargsObj) => {
    try {
        if (yargsObj.add) {
            // add movie to database
        } else if (yargsObj.list) {
            //list all movies
        } else if (yargsObj.update){
            // update movie
        } else if (yargsObj.delete){
            // delete all movies
        } else {
            // do something
            console.log("Incorrect command");
        }
    } catch (error) {
        console.log(error);
        
    }
};

app(yargs.argv);