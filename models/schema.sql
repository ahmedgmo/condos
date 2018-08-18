DROP DATABASE IF EXISTS condosdb;
CREATE DATABASE condosdb;

INSERT INTO rooms (room, available, price, createdAt, updatedAT)
VALUES 
("Party Room", true, 100, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
("Media Room", false, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
("Sports Lounge", false, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
("Crafts Room", false, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
("Board Room", false, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP), 
("Study", false, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)

INSERT INTO users (firstName, lastName, email, cellphone, unitNum, password, createdAt, updatedAt)
VALUES 
("Ahmed", "Osman", "ahmed@osman.com", 4168358898, "4202", "password", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Lucas", "Podolosky", "lucas@podolosky.com", 5552123131, "PH03", "password", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Mo", "Salah", "mo@salah.com", 5553332121, "2202", "password", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
("Cristiano", "Ronaldo", "cristiano@ronaldo.com", 5553125654, "TH07", "password", CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);