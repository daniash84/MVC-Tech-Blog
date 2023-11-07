const { User } = require("../models");

const userData = [
  {
    username: "Carol",
    password: "marie",
  },
  {
    username: "Easton",
    password: "brad",
  },
  {
    username: "Scott",
    password: "steven",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;