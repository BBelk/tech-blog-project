const { Comment } = require('../models');

const commentData = [
  {
    c_body: 'Comment for the first blog post... Wow.',
    c_time_made: 124,
    user_id: 2,
    bp_id: 1,
  },
  {
    c_body: 'This is the second comment on the first blog post. Cool.',
    c_time_made: 125,
    user_id: 3,
    bp_id: 1,
  },
  {
    c_body: 'Comment on the second blog post. Look Im doing it!',
    c_time_made: 346,
    user_id: 1,
    bp_id: 2,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
