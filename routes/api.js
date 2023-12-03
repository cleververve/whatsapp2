const express = require("express");
const router = express.Router();


router.get('/getMessages',  (req, res, next)=> {
    res.send([{name:'el1'},{name:'el2'}])
});

router.post('/createMessage', (req,res,next)=>{
    res.send('Hello!');
})

module.exports = router;
