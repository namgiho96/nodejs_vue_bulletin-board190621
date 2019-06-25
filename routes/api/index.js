const router = require('express').Router();
const data = require('./data');
const test = require('./test');
const auth = require('./auth');
const check = require('./check');


console.log('-------------api_index 들어옴---------------');

router.all('*', check.verify);
router.use('/auth', auth);
router.use('/data', data);
router.use('/test', test);


router.all('*', (req, res, next) => {
  console.log(req.headers);
  next();
})

router.all('*', (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});



module.exports = router;