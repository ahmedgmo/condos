module.exports = function (sequelize, DataTypes) {
    let Bookings = sequelize.define("Bookings", {
        date: DataTypes.DATEONLY,
        guests: DataTypes.INTEGER,
        startAt: DataTypes.DATE,
        endAt: DataTypes.DATE,
        duration: DataTypes.INTEGER,
        alcohol: DataTypes.BOOLEAN,
        secGuard: DataTypes.BOOLEAN,
        costs: DataTypes.INTEGER,
        pricePaid: DataTypes.BOOLEAN,
        canUse: DataTypes.BOOLEAN
    });

    Bookings.associate = function(models) {
        Bookings.belongsTo(models.Users, {
            foreignKey: {
                // allowNull: false
            }
        });

        Bookings.belongsTo(models.Rooms, {
            foreignKey: {
                // allowNull: false
            }
        });
    }
    
    return Bookings;
};

