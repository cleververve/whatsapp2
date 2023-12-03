const express = require("express");
const router = express.Router();


router.get('/getMessages',  (req, res, next)=> {
    res.send([{name:'Serhii'}])
});

router.post('/createMessage', (req,res,next)=>{
    res.send('Hello!');
})

module.exports = router;
