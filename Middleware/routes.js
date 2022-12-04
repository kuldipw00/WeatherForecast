const express = require('express');

const router = new express.Router();

router.get('/api/weatherforecast', (req,res)=>{
    fetch("https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1")
    .then(response => response.json())
    .then(data => {
        const {current,forecast} = data
        const currentTemp = (({temp_f})=>({temp_f}))(current)
        let forcastData = forecast.forecastday[0].hour.map(item=>{
          return {temp_f:item.temp_f,time:item.time.split(" ")[1]}
        })
        return res.send({current:currentTemp,forecast:forcastData})
    })
    
});

module.exports = router;