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
