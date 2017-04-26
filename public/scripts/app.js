console.log("Sanity Check: JS is working!");
var $favoriteMoviesList;
var allMoviess = [];

$(document).ready(function(){

$favoriteMoviesList = $('#MoviesTarget');
  $.ajax({
    method: 'GET',
    url: '/api/favoriteMovies',
    success: handleSuccess,
    error: handleError
  });

  $('#newfavoriteMovie').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/favoriteMovies',
      data: $(this).serialize(),
      success: newMovieSuccess,
      
    });
  });

});

/*$favoriteMoviesList.on('click', '.deleteBtn', function() {
    console.log('clicked delete button to', '/api/favoriteMovies/'+$(this).attr('data-id'));
    $.ajax({
      method: 'DELETE',
      url: '/api/books/'+$(this).attr('data-id'),
      success: deleteMoviesSuccess,
      
    });
  });

});*/

function handleSuccess(json) {
  allBooks = json;
  render();
}