
var searchButton = document.getElementById("searchButton");
//shows and hides the pop up modal box to use a validation for the search box
function popup(){
  $("#validation").css("visibility", "visible")
  $("#closeValidationBtn").click(function(){
    $("#validation").css("visibility", "hidden")
  })
}
//click event on the search button
searchButton.addEventListener("click", function () {
  
 // we'll have to move the OMDB data retrieval function (all the commented out code) to inside the new result.js
  var searchBar = document.getElementById("searchBar");
  var searchTerm = searchBar.value;
  //validation for the search box. Will run the popup function if those conditions are met
  if (searchTerm === "" || searchTerm === " "){
    popup()
  } else {
    //added the search term to local storage so it can be accessed on the result.js file in order to run the playVideo function
  localStorage.setItem("searchInput", searchTerm)
  //after the search button is clicked, it changes the window to the result.html file to display the results
  window.location.href="./result.html"
  var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=16ec6f98";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.addEventListener("load", function () {
    var response = JSON.parse(xhr.response);
    var results = response.Search;
    var resultsContainer = document.createElement("div");
    resultsContainer.setAttribute("id", "resultsContainer");
    document.body.appendChild(resultsContainer);
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var resultContainer = document.createElement("div");
      resultContainer.setAttribute("class", "resultContainer");
      resultContainer.innerHTML = result.Title;
      resultsContainer.appendChild(resultContainer);
    
    }
  });
  xhr.send();
  }
});

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


// Test Prompt to get movie input and add it to favories array and local storage
// var movieEntered = prompt('Enter movie');
// addFavoriteMovie(movieEntered);


// Adds movie Title based on user input and movie poster URL as a new object in the favorite movie array
function addFavoriteMovie(movieName){
  var newMovie = {
    Title: movieName,
    moviePosterURL: ""
  }
  movieName.replace(/\s+/g, '-').toLowerCase();
  fetch(movieURL+movieName)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        newMovie.moviePosterURL = data.Poster;
        favoriteMoviesArray.push(newMovie);
        localStorage.setItem("favoriteMoviesStorage", JSON.stringify(favoriteMoviesArray));
        renderFavoriteMovies();
      })
}

// Brings user to favorites page when button clicked on homepage
var favoritesPageBtn = $("#favorites-btn");
favoritesPageBtn.click(function () {
  window.location.href = "./favorites.html";
});

// Brings user to back to home page when back button clicked
var homePageBtn = $("#home-btn");
homePageBtn.click(function () {
  window.location.href = "./index.html";
});


