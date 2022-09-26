const router = require('express').Router();
const User = require('../models/User');

const serialize = (data) => JSON.parse(JSON.stringify(data));

router.get('/', async (req, res) => {
  const data = await User.findAll();
  const dishes = serialize(data);

  const data2 = await User.findByPk(1);
  const dishData = await serialize(data2);

  console.log(dishes);
  res.render('all', {dishes: dishes, user: dishData});
})

// get one dish without serializing data
router.get('/dish/:id', async (req, res) => {
  try {
    // const dishData = await Dish.findByPk(req.params.id);
    const data = await User.findByPk(req.params.id);
    const dishData = await serialize(data);
    // console.log(dishData)
    res.render('dish', dishData);
    // res.render('dish', {user: dishData});
    // res.render('dish', dishData.dataValues);
    // res.render('dish', dishData.get({plain: true}));
    // res.render('dish', dishData.get({plain: true}));
  } catch (err) {
    res.status(500).json(err);
  }
});

// // get one dish with serialized data
// router.get('/dish/:id', async (req, res) => {
//   try {
//   // Search the database for a dish with an id that matches params
//   const dishData = await Dish.findByPk(req.params.id);
//   console.log(dishData)
//   // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
//   const dish = dishData.get({ plain: true });
//   // Then, the 'dish' template is rendered and dish is passed into the template.
//   res.render('dish', dish);
//   } catch (err) {
//       res.status(500).json(err);
//   }
// });

module.exports = router;

