const exps = require('../data/explorations');

exports.getAllExplorations = (req, res) => {
    res.json({ success: true, count: exps.length, data: exps });
};

exports.getExplorationById = (req, res) => {
    const e = exps.find(x => x.id === +req.params.id);
    if (!e) return res.status(404).json({ success: false, message: 'Misyon bulunamadı' });
    res.json({ success: true, data: e });
};
