const express = require('express');
const viewController = require('./../controllers/viewController')
const router = express.Router();

router.get('/overview',viewController.getOverview)
// router.get('/overview/:id',viewController.multiTask)

router.get('/overview/page/:page',viewController.paginationOfBook)
router.get('/overview/category/:category',viewController.categories)
router.get('/overview/book/:id',viewController.getOneBook)
router.get('/overview/contact',viewController.getContact)
router.get('/overview/about',viewController.getAbout)
router.get('/overview/bestseller',viewController.bestseller)


module.exports = router;