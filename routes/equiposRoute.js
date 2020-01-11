const express= require('express');
const router= express.Router();
const equiposController= require('../controllers/equiposController');


router.post('/ver', equiposController.verController);
router.post('/joseph',(req,res,next)=>{
    res.json({"hola": "joseph"});
})


module.exports= router;