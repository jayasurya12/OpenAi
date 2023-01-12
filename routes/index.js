const router = require('express').Router();
const open = require('./OpenAi')

router.use('/',open);


module.exports = router;