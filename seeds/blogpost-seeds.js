const { BlogPost } = require('../models');

const blogpostData = [
  {
    bp_title: 'Title Text is right here',
    bp_body: 'This will be the body text. Lorem ipsum and all that',
    bp_time_made: 123,
    user_id: 1,
  },
  {
    bp_title: 'This is the second post',
    bp_body: 'Even more body text, the second time',
    bp_time_made: 345,
    user_id: 1,
  },
  {
    bp_title: 'This is the third',
    bp_body: 'That right, the third. What are you going to do about it?',
    bp_time_made: 456,
    user_id: 2,
  },
];

const seedCategories = () => BlogPost.bulkCreate(blogpostData);

module.exports = seedCategories;