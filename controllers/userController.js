const axios = require('axios');
exports.userController = async (req, res) => {

    try {
        const { city } = req.query
        const api = process.env.API_KEY
        if (!city) {
            return res.status(400).json({
                error: 'City parameter is missing'
            });
        }

        const info = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api}`
        const result = await axios.get(info);
        const weatherData = result.data;

        res.json(weatherData);
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Something went wrong"
        })
    };
};