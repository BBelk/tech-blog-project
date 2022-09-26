const { Comment } = require('../models');

const commentData = [
  {
    c_body: 'Comment for the first blog post... Wow.',
    user_id: 2,
    bp_id: 1,
  },
  {
    c_body: 'This is the second comment on the first blog post. Cool.',
    user_id: 3,
    bp_id: 1,
  },
  {
    c_body: 'Comment on the second blog post. Look Im doing it!',
    user_id: 1,
    bp_id: 2,
  },
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
