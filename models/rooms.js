module.exports = function(sequelize, DataTypes) {
    let Rooms = sequelize.define("Rooms", {
        room: DataTypes.STRING,
        availabile: DataTypes.BOOLEAN,
        price: DataTypes.INTEGER
    });
    return Rooms;
  };  