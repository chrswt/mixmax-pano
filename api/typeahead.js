const key     = require('../utils/key');
const request = require('request');

module.exports = (req, res) => {
  // Extract trailing query term after slash command is resolved
  const term = req.query.text.trim();

  // Default behavior before field is dirty
  if (!term) {
    res.json([{
      title: '<i>(Enter an address or place name)</i>',
      text: ''
    }]);
    return;

  // Handle Google Places autocomplete API call
  } else {
    request({
      url: 'https://maps.googleapis.com/maps/api/place/autocomplete/json',
      method: 'GET',
      qs: {
        input: term,
        key: key.autocomplete_key
      },
      gzip: true,
      json: true,
      timeout: 10 * 1000 
    }, (err, resp) => {
      if (err) {
        res.status(500).send('Error');
        console.log(err);

      } else {
        console.log(resp.body.predictions);
      }
    });
  }
};
