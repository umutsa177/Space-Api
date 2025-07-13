require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// MiddleWare
app.use(express.json());

// Routers
const apiRouter = require('./routes');
app.use('/api', apiRouter);

// Ana sayfa
app.get('/', (req, res) => {
    res.json({
        message: "Uzay Keşfi API'sine Hoş Geldiniz! 🚀",
        endpoints: {
            planets: '/api/planets',
            planetById: '/api/planets/:id',
            planetsByType: '/api/planets/type/:type',
            explorations: '/api/explorations',
            explorationById: '/api/explorations/:id',
            stats: '/api/stats',
            search: '/api/search?q=keyword',
            randomPlanet: '/api/planets/random'
        }
    });
});

// 404 middleware
const notFound = require('./middlewares/notFound');
app.use(notFound);

// Sunucu başlat
app.listen(port, () => {
    console.log(`🚀 Uzay API ${port} portunda çalışıyor!`);
});
