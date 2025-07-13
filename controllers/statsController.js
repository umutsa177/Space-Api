const planets = require('../data/planets');
const exps = require('../data/explorations');

exports.getStats = (req, res) => {
    const totalMoons = planets.reduce((sum, p) => sum + p.moons, 0);
    res.json({
        success: true,
        data: {
            totalPlanets: planets.length,
            terrestrialPlanets: planets.filter(p => p.type === 'Karasal').length,
            gasGiants: planets.filter(p => p.type === 'Gaz Devi').length,
            totalMoons,
            totalExplorations: exps.length,
            oldestMission: Math.min(...exps.map(e => e.year)),
            newestMission: Math.max(...exps.map(e => e.year))
        }
    });
};

exports.searchAll = (req, res) => {
    const q = req.query.q;
    if (!q) return res.status(400).json({ success: false, message: 'q parametresi gerekli' });

    const planetResults = planets.filter(p =>
        p.name.toLowerCase().includes(q.toLowerCase()) ||
        p.interestingFact.toLowerCase().includes(q.toLowerCase())
    );
    const explorationResults = exps.filter(e =>
        e.missionName.toLowerCase().includes(q.toLowerCase()) ||
        e.destination.toLowerCase().includes(q.toLowerCase())
    );

    res.json({
        success: true,
        query: q,
        results: {
            planets: planetResults,
            explorations: explorationResults,
            totalResults: planetResults.length + explorationResults.length
        }
    });
};
