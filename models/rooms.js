module.exports = function(sequelize, DataTypes) {
    let Rooms = sequelize.define("Rooms", {
        room: DataTypes.STRING,
        available: DataTypes.BOOLEAN,
        price: DataTypes.INTEGER
    });

    Rooms.associate = function(models) {
        Rooms.hasMany(models.Bookings, {
            onDelete: "restrict"
        });
    };
    return Rooms;
  };  