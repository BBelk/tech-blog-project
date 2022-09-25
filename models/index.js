// import models

const User = require('./User');
const BlogPost = require('./BlogPost');
const Comment = require('./Comment');


BlogPost.belongsTo(User, {
  foreignKey: "user_id"
});

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(BlogPost, {
  foreignKey: 'bp_id'
});

BlogPost.hasMany(Comment, {
  foreignKey: 'bp_id'
});

// Comment.belongsTo(User, {
//   through: BlogPost,
//   foreignKey: 'user_id'
// });

// User.belongsTo(Comment, {
//   through: BlogPost,
//   foreignKey: 'user_id'
// });

module.exports = {
  User,
  BlogPost,
  Comment,
};