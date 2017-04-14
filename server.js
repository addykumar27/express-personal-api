// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/*
 * JSON API Endpoints
 */

app.get('/api', function apiIndex(req, res) {
  // TODO: Document all your api endpoints below as a simple hardcoded JSON object.
  // It would be seriously overkill to save any of this to your database.
  res.json({
    woopsIForgotToDocumentAllMyEndpoints: false, // CHANGE ME ;)
    message: "Welcome to my personal api! Here's what you need to know!",
    documentationUrl: "https://github.com/addykumar27/express-personal-api", // CHANGE ME
    baseUrl: "https://dashboard.heroku.com/account", // CHANGE ME
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Data about me"}, // CHANGE ME
      {method: "POST", path: "/api/favoritemovies", description: "E.g. Create a new favorite movies"} // CHANGE ME
    ]
  })
});

app.get('/api/profile', function apiIndex(req, res) {
res.json({
name: 'Adarshna Kumar',
githubUsername: 'addykumar27',
githubLink: 'https://github.com/addykumar27',
currentCity: 'Hayward',
  })
});

app.post('/api/favoritemovies', function apiIndex(req, res) {
  console.log('movies create', req.body);
  var newMovies = new db.Movies(req.body);
  newMovie.save(function handleDBMovieSaved(err, savedMovies) {
    res.json(savedMovies);
  })
});


/*db.Movies.find({name: req.body.name}, 
    .populate('Movies')
    .exec(function(err, foundfavoritemovies){
      if (err) { return console.log("index error: " + err); }
      res.json(favoritemovies);
    });
});*/
   

app.delete('/api/favoritemovies/:id', function (req, res) {
  // get book id from url params (`req.params`)
  console.log('Movie delete', req.params);
  var MoviesId = req.params.id;
  // find the index of the book we want to remove
  db.Movie.findOneAndRemove({ _id: MoviesId }, function (err, deletedMovies) {
    res.json(deletedMovies);
  });
});


/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
