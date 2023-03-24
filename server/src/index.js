'use strict';
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
const CLIENT_BUILD_PATH = path.join(__dirname, '../../client/public');
const app = express();
app.use(express.static(CLIENT_BUILD_PATH));
//API

//Get App Data
app.get('/app-data', (req, res) => {
    res.set('Content-Type', 'application/json');
    let data = {
      name : "React boilerplate",
      description: "boilerplate you can copy to inmediately start your app with a reactJS client and node server."
    };
    console.log("imcalled");
    res.send(JSON.stringify(data, null, 2));
  });
  
  // Default response to request from any other routes. Redirects to React App Index.
  app.get('*', function(request, response) {
    response.sendFile(path.join(CLIENT_BUILD_PATH, 'index.html'));
  });
  
  app.listen(PORT, HOST);
  console.log(`Node Server running on http://${HOST}:${PORT}`);