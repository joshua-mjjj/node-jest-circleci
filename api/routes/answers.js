const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.status(200).json({
        message: 'Handling GET requests to /answers'
    });
});

router.post('/', (req, res, next)=>{
    res.status(201).json({
        message: 'Handling POST requests to /answers'
    });
});

router.get('/:answerid', (req, res, next)=>{
    res.status(200).json({
        message:'A specific answer',
        answerid:req.params.answerid
    });
});


router.patch('/:answerid', (req, res, nesxt)=>{
    res.status(200).json({
        message:'answer has been modified'
    });
});

router.delete('/:answerid', (req, res, nesxt)=>{
    res.status(200).json({
        message:'answer has been deleted'
    });
});

module.exports = router;
