const express = require ("express");
const router = express.Router ();
const MOB = require ("../services/perso.js");
router.get("/", function(req,res,next){
    try{
        res.json(await MOB.getMultiple(req.query.page));
    }catch (err){
        console.error('error while getting les mobs', err.message)
        next (err);
    }
});

module.export =router;