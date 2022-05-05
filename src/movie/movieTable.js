const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");

// don't need to include Id as sequelize includes one for us.
//same with primary and foreign keys, methods can do it for us. 

const Movie = sequelize.define("Movie", {
    title: {
        type: DataTypes.STRING,
        // allowNull = default true
        allowNull: false,
        // unique = default false 
        unique: true,
    },
    actor: {
        //sets data type to only string
        type: DataTypes.STRING,
        defaultValue: "Not Specified",
    }
});

module.exports = Movie;