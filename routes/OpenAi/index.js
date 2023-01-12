const router = require('express').Router();
const generateImage = require('../../controllers');


router.get('/open',(req,res)=>{
    console.log('first');
    res.send('open Ai');
})

router.post('/generateimage', generateImage)

module.exports = router;