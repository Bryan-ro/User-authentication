import Session from "./Session.js"
import User from "./User.js"


Session.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});


User.hasMany(Session, {
    foreignKey: 'user_id',
    as: 'sessions'
  });