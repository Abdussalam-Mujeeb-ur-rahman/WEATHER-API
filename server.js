const express = require("express");
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest


const app = express();



app.get("/:city", (req, res) => {
  let city = req.params.city;

  function getWeather(){
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b33648f4829d21f5a1eee370c55bfa04`
      );
      request.send();
      request.onload = function(){
        if (request.status === 200) {
          resolve(request.responseText);
        } else {
          reject(request.status);
        }
      };
    })
}

      getWeather()
      .then(result => {
        let data = JSON.parse(result)
        console.log(data.sys.country)
        res.json({
          country: data.sys.country,
          message: `the weather in ${city} is ${data.weather[0].description}`
        })
      }).catch(error =>
        console.log(`error: ${error}`)
      )
    });


app.listen(3000, () => {
  console.log("Server is running");
});


module.exports = app