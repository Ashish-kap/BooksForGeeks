const express = require('express');
const bookController = require('./../controllers/bookController')

const router = express.Router(); 
router.route('/').get(bookController.getAllBook).post(bookController.createBook)
router.route('/:id').get(bookController.getBookByID)
module.exports=router;
