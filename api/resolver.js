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
      
      // Use coordinate attributes to embed street view panorama
      const html = `
        <iframe width="600" height="300" frameborder="0" style="border:0"
          src="https://www.google.com/maps/embed/v1/streetview?key=${key.embed_key}&location=${lat}, ${lng}" 
          allowfullscreen>
        </iframe>`;

      res.json({
        body: html
      });
    }
  });
};
