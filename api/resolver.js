const key     = require('../utils/key');
const request = require('request');

module.exports = (req, res) => {
  const term = req.query.text.trim();

  // Retrieve geocode for user-specified location
  request({
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    method: 'GET',
    qs: {
      key: key.geocode_key,
      address: term
    },
    gzip: true,
    json: true,
    timeout: 15 * 1000
  }, (err, resp) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error');

    } else {
      const lat = resp.body.results[0].geometry.location.lat;
      const lng = resp.body.results[0].geometry.location.lng;
      const html = '';

      // Use coordinate attributes to embed street view panorama
    }
  });
};
