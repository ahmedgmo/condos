module.exports = function (sequelize, DataTypes) {
  let Users = sequelize.define("Users", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    cellphone: DataTypes.STRING,
    unitNum: DataTypes.STRING,
    password: DataTypes.STRING
  });

  Users.associate = function(models) {
    Users.hasMany(models.Bookings, {
      onDelete: "cascade"
    });
  };
  return Users;
};
