const planets = require('../data/planets');

exports.getAllPlanets = (req, res) => {
    res.json({ success: true, count: planets.length, data: planets });
};

exports.getPlanetById = (req, res) => {
    const p = planets.find(x => x.id === +req.params.id);
    if (!p) return res.status(404).json({ success: false, message: 'Gezegen bulunamadı' });
    res.json({ success: true, data: p });
};

exports.getPlanetsByType = (req, res) => {
    const filtered = planets.filter(x => x.type.toLowerCase() === req.params.type.toLowerCase());
    res.json({ success: true, type: req.params.type, count: filtered.length, data: filtered });
};

exports.getRandomPlanet = (req, res) => {
    const p = planets[Math.floor(Math.random() * planets.length)];
    res.json({ success: true, data: p });
};
