// Variables for favorites page
var favoriteMoviesArray = [];
var movieURL = 'http://www.omdbapi.com/?apikey=16ec6f98&t=';
var favoritesListEl = $('#favorite-movies-list');
var posterURL = '';


// Displays favorite movies list when page is first opened or refreshed
renderFavoriteMovies();

//Displays the list of favorite movies based on local storage and new movies added by users
function renderFavoriteMovies() {
  favoritesListEl.empty();
  var favoriteMoviesStorage = JSON.parse(localStorage.getItem("favoriteMoviesStorage"));
  if (favoriteMoviesStorage !== null) {
    favoriteMoviesArray = favoriteMoviesStorage;
  }
  for (var i = 0; i < favoriteMoviesArray.length; i++) {
    var currentMovieTitle = favoriteMoviesArray[i].Title;
    var currentPosterURL = favoriteMoviesArray[i].moviePosterURL;
    favoritesListEl.append('<div class="row white section" data-index="'+i+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s4"><img class="responsive-img" src="'+currentPosterURL+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s4 center"><h4>'+currentMovieTitle+'</h4></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s4 right"><a class="remove-favorite-btn waves-effect waves-light btn red right"><i class="material-icons left">delete</i>Remove</a></div>');
  };
}

// Adds functionality to the remove button so it removes it from favorite movies array
favoritesListEl.on("click", ".remove-favorite-btn", function () {
  var index = $(this).parent().parent().attr("data-index")
  favoriteMoviesArray.splice(index, 1);
  localStorage.setItem("favoriteMoviesStorage", JSON.stringify(favoriteMoviesArray));
  renderFavoriteMovies();
});


// Brings user to back to home page when back button clicked
var homePageBtn = $("#home-btn");
homePageBtn.click(function () {
  window.location.href = "./index.html";
});