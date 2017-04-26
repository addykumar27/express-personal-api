// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

 var db = require('./models');

var new_Movies =  [
  {
    
    name: "Forrest Gump",
    description: "Drama",
    director: "Robert Zemeckis",
    releaseYear: 1994

  },
  {
    name: "Titanic",
    description: "Drama, Romance",
    director: "James Cameron",
    releaseYear: 1997
  },
  {
    name: "Forrest Gump",
    description: "Drama",
    director: "Robert Zemeckis",
    releaseYear: 2001
  }
  ];
  

 db.Movies.create(new_Movies, function(err, favoriteemovies){
  //for (var i = 0; i < new_Movies.length - 1; i++);
  if (err){
   return console.log("Error:", err);
 } else {
   console.log("Created new favoritemovies", Movies._id)
  process.exit(); // we're all done! Exit the program.
}
});
