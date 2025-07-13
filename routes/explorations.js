const express = require('express');
const router = express.Router();
const {
    getAllExplorations,
    getExplorationById
} = require('../controllers/explorationController');

router.get('/', getAllExplorations);
router.get('/:id', getExplorationById);

module.exports = router;
