 var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

 var MoviesSchema = new Schema({
    name: String,
    description: String,
    director: String,
    yearofrealease: Number
});

 var favoritemovies = mongoose.model('Movies', MoviesSchema);

module.exports = Movies;
