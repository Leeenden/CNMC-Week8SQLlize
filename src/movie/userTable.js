const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");


const User = sequelize.define("User", {
    // id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true
    // },
    userName: {
        type: DataTypes.STRING,
        required: true,
        // allowNull = default true
        allowNull: false
    }
});

module.exports = User;

// $ node src/app.js --add --id=1 --title="SpiderMan" --actor="Tom Holland" --rating="8" --UserId=1 --userName="Linden"