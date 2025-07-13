module.exports = (req, res) => {
    res.status(404).json({
        success: false,
        message: 'Sayfa bulunamadı. Adresinizi kontrol edin.'
    });
};
