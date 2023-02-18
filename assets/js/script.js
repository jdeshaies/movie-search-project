// var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInputQuerySearch}`;
// var userInput = $("#").val();
// var userInputQuerySearch = userInput.replaceAll(" ", "+");


// function getApi() {
//   $.get(requestUrl, function (data) {
//     var videoId = data.items[0].id.videoId;
//     console.log(data);
//     console.log(data.items[0].id.videoId);
//   });
// }

// function playVideo(videoId) {
//   var video = $("#youtubeVideo");
//   video.attr("src", "https://www.youtube.com/embed/zyYgDtY2AMY");

//   $("#video").append(video);
// }
// //${data.items[0.id]}
// //items[0].id.videoId


// var searchButton = document.getElementById("searchButton");
// searchButton.addEventListener("click", function () {
//   var searchBar = document.getElementById("searchBar");
//   var searchTerm = searchBar.value;
//   var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=16ec6f98";
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url);
//   xhr.addEventListener("load", function () {
//     var response = JSON.parse(xhr.response);
//     var results = response.Search;
//     var resultsContainer = document.createElement("div");
//     resultsContainer.setAttribute("id", "resultsContainer");
//     document.body.appendChild(resultsContainer);
//     for (var i = 0; i < results.length; i++) {
//       var result = results[i];
//       var resultContainer = document.createElement("div");
//       resultContainer.setAttribute("class", "resultContainer");
//       resultContainer.innerHTML = result.Title;
//       resultsContainer.appendChild(resultContainer);
//       playVideo();
//     }
//   });
//   xhr.send();
// });


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
    favoritesListEl.append('<div class="row" data-index="'+i+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s2"><img src="'+currentPosterURL+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s8 center"><h4>'+currentMovieTitle+'</h4></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s2 right"><a class="remove-favorite-btn waves-effect waves-light btn right"><i class="material-icons left">delete</i>Remove</a></div>');
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
var movieEntered = prompt('Enter movie');
addFavoriteMovie(movieEntered);


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

