const request = require("request");

const forecast = (lat, lon, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=c573fdc0ade1a9fa6ca5412cbf5fab86&query=${lat},${lon}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find Location!", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". The Temperature is " +
          body.current.temperature +
          "°C and it feels like " +
          body.current.feelslike +
          "°C."
      );
    }
  });
};

module.exports = forecast;
