var express = require('express');
var app = express();

var webpackMiddleware = require('webpack-dev-middleware');
var webpack = require('webpack');

var compiler = webpack(require('./webpack.config.js'));
app.use(webpackMiddleware(compiler));

// mongoose.connect('mongodb://localhost/trading');


// Serve your API assets here. You'll need to include the post route file.
app.use('/api/posts', require('./api/posts'));

// Serve your static assets here. You'll need to use express.static middleware.
app.use(express.static('public'));

// If none of the above matches, serve public/index.html.
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
