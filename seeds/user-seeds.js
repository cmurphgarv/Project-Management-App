const { User } = require("../models");

const userData = [
  {
    id: 1,
    username: "gregorystevens",
    email: "gregorystevens@gmail.com",
    password: "fortnite20",
  },
  {
    id: 2,
    username: "xatacism",
    email: "xatacismzatacism@gmail.com",
    password: "codeguy44",
  },
  {
    id: 3,
    username: "peanutbutter",
    email: "peanutbutterguy33@gmail.com",
    password: "jellytime1",
  },
  {
    id: 4,
    username: "billdollar20",
    email: "billdollar20@gmail.com",
    password: "ades4fun",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
