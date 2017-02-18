# Google 360-panorama integration for Mixmax
This is an open source Mixmax Slash Command. See [Mixmax slash command](http://developer.mixmax.com/docs/overview-slash-commands#tutorial-building-mygiphy) for more information on building integrations in Mixmax.

## Demo
After following the setup instructions below, you should be able to trigger the integration with the `/pano` command in your email client. It should look like this:

![Screencast](resources/screencast.gif)

## Setup and running locally
1. Make a copy of `/utils/_key.js` as `/utils/key.js`. Register for and include API keys for the following Google APIs:
  - [Google Places Autocomplete](https://developers.google.com/places/web-service/autocomplete)
  - [Google Geocode](https://developers.google.com/maps/documentation/geocoding/start)
  - [Google Embed](https://developers.google.com/maps/documentation/embed/guide)
1. Install dependencies using `npm i`
1. Run server using `npm start`

## Why do we run it in https locally?
Mixmax slash command APIs are required to be served over https. This is because they are queried directly from the Mixmax client in the browser (using AJAX) that's running on an HTTPS domain. Browsers forbid AJAX requests from https domains to call http APIs, for security. So we must run an https server with a locally-signed certificate.

## Adding the slash command in Mixmax
1. Go to your [Mixmax integration settings panel](https://app.mixmax.com/dashboard/settings/integrations)
1. Click **Add Slash Command** and enter the following values:
  ![Mixmax slash command](resources/slash_command.png)

Detailed instructions can be found [here](https://mixmax.com/blog/giphy-slash-command).
