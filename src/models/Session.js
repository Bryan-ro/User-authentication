import Sequelize from "sequelize";
import sequelize from "../config/connectDb.js";
import User from "./User.js"

const Session = sequelize.define("sessions", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    session_id: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_ip: {
        type: Sequelize.STRING
    }
});

Session.belongsTo(User, { foreignKey: 'users' });

// Session.sync({ force: true })

export default Session;
