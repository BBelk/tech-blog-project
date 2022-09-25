const { BlogPost } = require('../models');

const userData = [
  {
    username: 'BruceBelk',
    email: 'belkbh@gmail.com',
    password: 'Guillermo999',
  },
  {
    username: 'KatJacks',
    email: 'klj34@gmail.com',
    password: 'Margie2020',
  },
  {
    username: 'SteveyBoy',
    email: 'satan@gmail.com',
    password: 'KILL12345',
  },
  
];

const seedCategories = () => User.bulkCreate(userData);

module.exports = seedCategories;
