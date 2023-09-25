const express = require('express');
const axios = require('axios');

const router = express.Router();

// ----------------------------------------



router.get("/", (req, res) => {
    res.send("Hello")
})


router.get("/:city", async (req, res) => {

    const { city } = req.params;
    if (!city) res.send("Provide valid city name.");

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/current.json',
        params: { q: city },
        headers: {
            'X-RapidAPI-Key': '3a1992f95dmshf95de86ff32f917p179732jsnab3512977fe7',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.send(response.data);
    } catch (error) {
        res.status(400).send(error.message);
    }
})


module.exports = router;