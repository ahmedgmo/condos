module.exports = function(sequelize, DataTypes) {
    let Bookings = sequelize.define("Bookings", {
        guests: DataTypes.INTEGER,
        start_at: DataTypes.DATE,
        end_at: DataTypes.DATE,
        duration: DataTypes.INTEGER,
        alcohol: DataTypes.BOOLEAN,
        sec_guard: DataTypes.BOOLEAN,
        costs: DataTypes.INTEGER,
        price_paid: DataTypes.BOOLEAN,
        can_use: DataTypes.BOOLEAN
    });
    return Bookings;
  }; 