const express = require('express');
const router = express.Router();
const {
    getAllPlanets,
    getPlanetById,
    getPlanetsByType,
    getRandomPlanet
} = require('../controllers/planetController');

router.get('/', getAllPlanets);
router.get('/random', getRandomPlanet);
router.get('/type/:type', getPlanetsByType);
router.get('/:id', getPlanetById);

module.exports = router;
