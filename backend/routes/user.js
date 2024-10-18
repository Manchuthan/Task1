const express = require('express');
const connection = require('../connection');
const router = express.Router();


router.get('/userdetails',(req,res)=>{
    const query = 'SELECT * FROM userdetails';

    connection.query(query,(err,results)=>{
        if(err){
            console.error('Error fetching users:',err);
            return res.status(500).json({message:'Internal server error'});
        }
        res.status(200).json(results);
    });
});

router.get('/groupdetails',(req,res)=>{
    const query = 'SELECT * FROM groupdetails';

    connection.query(query,(err,results)=>{
        if(err){
            console.error('Error fetching users:',err);
            return res.status(500).json({message:'Internal server error'});
        }
        res.status(200).json(results);
    });
});


module.exports = router;