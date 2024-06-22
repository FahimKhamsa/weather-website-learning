const request = require("request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/search/geocode/v6/forward?q=" +
    encodeURIComponent(address) +
    "&access_token=pk.eyJ1IjoiZGVhZHkyMDUiLCJhIjoiY2x4bTRtdGgxMDA4bzJpcHQxbDdqNXc4aSJ9.-aeMhNc3X_CNYUhSXj0DMg&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find location! Try Another Search!", undefined);
    } else {
      callback(undefined, {
        location: body.features[0].properties.full_address,
        latitude: body.features[0].properties.coordinates.latitude,
        longitude: body.features[0].properties.coordinates.longitude,
      });
    }
  });
};

module.exports = geocode;
