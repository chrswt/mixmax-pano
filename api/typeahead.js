const key     = require('../utils/key');
const request = require('request');

module.exports = (req, res) => {
  // Extract trailing query term after slash command is resolved
  const term = req.query.text.trim();

  if (!term) {
    // Default behavior before field is dirty
    res.json([{
      title: '<i>(Enter an address or place name)</i>',
      text: ''
    }]);
    return;
  } else {
    // Handle Google Places autocomplete API call
  }

};
