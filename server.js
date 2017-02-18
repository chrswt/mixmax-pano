const express = require('express');
const cors    = require('cors');
const pem     = require('pem');
const https   = require('https');
const app     = express();

// Set up cross-origin permissions for mixmax.com
const corsOptions = {
  origin: /^[^.\s]+\.mixmax\.com$/,
  credentials: true
};

// Define API routes and middleware
app.get('/typeahead', cors(corsOptions), require('./api/typeahead'));
app.get('/resolver', cors(corsOptions), require('./api/resolver'));

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 9145);
} else {
  // Create self-signed https certificate
  pem.createCertificate({ days: 1, selfSigned: true }, (err, keys) => {
    if (err) throw err;
    
    https.createServer({
      key: keys.serviceKey,
      cert: keys.certificate
    }, app).listen(process.env.PORT || 9145);
  });
}
