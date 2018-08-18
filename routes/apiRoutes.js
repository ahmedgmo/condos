var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.Users.findAll({}).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Create a new user
  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });

  // Delete a user by id
  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({ where: { id: req.params.id } }).then(function(dbUsers) {
      res.json(dbUsers);
    });
  });
  //------------- bookings -------------------
  // Get all bookings
  app.get("/api/bookings", function(req, res) {
    db.Bookings.findAll({}).then(function(dbBookings) {
      res.json(dbBookings);
    });
  });

  // Create a new booking
  app.post("/api/bookings", function(req, res) {
    db.Bookings.create(req.body).then(function(dbBookings) {
      res.json(dbBookings);
    });
  });

  // Delete a booking by id
  app.delete("/api/bookings/:id", function(req, res) {
    db.Bookings.destroy({ where: { id: req.params.id } }).then(function(dbBookings) {
      res.json(dbBookings);
    });
  });

  //----------------- rooms -------------------------
  // Get all rooms
  app.get("/api/rooms", function(req, res) {
    db.Rooms.findAll({}).then(function(dbRooms) {
      res.json(dbRooms);
    });
  });

  // Create a new room
  app.post("/api/rooms", function(req, res) {
    db.Rooms.create(req.body).then(function(dbRooms) {
      res.json(dbRooms);
    });
  });

  // Delete a room by id
  app.delete("/api/rooms/:id", function(req, res) {
    db.Rooms.destroy({ where: { id: req.params.id } }).then(function(dbRooms) {
      res.json(dbRooms);
    });
  });
}