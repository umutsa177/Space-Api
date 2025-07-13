const express = require('express');
const router = express.Router();

router.use('/planets', require('./planets'));
router.use('/explorations', require('./explorations'));

// stats & search
const { getStats, searchAll } = require('../controllers/statsController');
router.get('/stats', getStats);
router.get('/search', searchAll);

module.exports = router;
