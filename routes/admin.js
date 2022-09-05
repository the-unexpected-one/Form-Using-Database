const path = require('path');

const express = require('express');



const adminController = require('../controllers/admin');

const router = express.Router();

router.post('/postData',adminController.postData);

router.get('/users',adminController.getUsers);
router.delete('/delete/:Id',adminController.deleteUser)
module.exports=router