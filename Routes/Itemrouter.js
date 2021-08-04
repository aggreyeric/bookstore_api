const express = require('express');
const router = express.Router();
const {ItemCreate, AllItems} = require('../Controllers/ItemController')



router.post('/create', ItemCreate);
router.get('/find', AllItems);







module.exports = router;