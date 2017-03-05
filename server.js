var express = require('express');
var path = require('path');
var compression = require('compression');

var app = express();

var logger = function (req, res, next) {
  console.log(res);
  next();
};
app.use(compression());
app.use(logger)

// serve static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory in React Router works
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/*', function(request, response) {
  response.redirect(301, '/');
})

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Production Express Server running at localhost:' + PORT);
})
