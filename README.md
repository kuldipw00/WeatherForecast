# WeatherForecast

## Frontend : Port 3000
  - react
  - reharts
  
## Middleware : Port 3333
  - Node 
  - Express
  
  
### Run backend and frontend
  - npm start
  
### Middleware API
  - http://localhost:3333/api/weatherforecast
  - Above API will call weather forecast API (https://api.weatherapi.com/v1/forecast.json?key=3738897fde7047f0a1822737203011&q=20171&days=1) and cleanup          data with required formats.
  ![image](https://user-images.githubusercontent.com/69000290/205505465-4eab60cd-8386-4b65-b919-a1954bcb41f5.png)
  
  - Formated JSON
  {
   "current":{
      "temp_f":61
   },
   "forecast":[
      {
         "temp_f":34.2,
         "time":"08:00"
      },
      {
         "temp_f":33.8,
         "time":"09:00"
      },
      {
         "temp_f":36.7,
         "time":"10:00"
      },
      {
         "temp_f":40.1,
         "time":"11:00"
      },
      {
         "temp_f":42.8,
         "time":"12:00"
      },
      {
         "temp_f":42.3,
         "time":"13:00"
      },
       ...
   ]
}

  
  
