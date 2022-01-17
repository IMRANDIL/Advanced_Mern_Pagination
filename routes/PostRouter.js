const router = require('express').Router();

const { getAllPosts } = require('../controllers/postController')


//get All posts...

router.get('/', getAllPosts)













module.exports = router;