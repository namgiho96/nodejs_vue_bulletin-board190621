const router = require('express').Router();
const data = require('./data');
const test = require('./test');


console.log('-------------api_index 들어옴---------------');

router.use('/data', data);
router.use('/test', test);


router.all('*', (req, res) => {
  res.status(404).send({ success: false, msg: `unknown uri ${req.path}` });
});
module.exports = router;