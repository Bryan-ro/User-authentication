import Sequelize from "sequelize";
import sequelize from "../config/connectDb.js"

const User = sequelize.define("users", {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING(15),
        allowNull: false
    },
    password: {
         type: Sequelize.STRING(),
         allowNull: false
    },
    admin: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

// User.sync({force: true})

export default User;



