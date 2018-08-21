var path = require("path");

module.exports = function(app) {
  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // admin route loads cms.html
  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/adminlogin.html"));
  });

  // register route loads register.html
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });

  // dashboard route loads dashboard.html
  app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

  // bookings route loads booking.html
  app.get("/booking", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/booking.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
