const router = require('express').Router();
const apiRoutes = require('./api');
const { User, BlogPost, Comment } = require('../models');

router.use('/api', apiRoutes);

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>")
// });
router.use('/api', async (req, res) => {
  // res.send("<h1>Wrong Route!</h1>")
  try{
    const allData = await User.findAll({
      include:[{
        model: BlogPost,
        order: [
          ['id', 'DESC']],
        include:[{model: Comment},]},],
    });
    res.status(200).json(allData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;