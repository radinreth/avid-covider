//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
 
// Serve only the static files form the dist directory
// Replace the '/dist/avid-covider'
app.use(express.static(__dirname + '/dist/avid-covider'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/avid-covider/index.html'
  res.sendFile(path.join(__dirname + '/dist/avid-covider/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);