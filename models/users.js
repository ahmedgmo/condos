module.exports = function(sequelize, DataTypes) {
  let Users = sequelize.define("Users", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    mobile: DataTypes.INTEGER,
    unit: DataTypes.STRING,
    password: DataTypes.STRING
  });
  return Users;
};
