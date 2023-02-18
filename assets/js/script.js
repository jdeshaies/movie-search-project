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

// var favoriteMovies = ['Spider-Man','Iron Man','Ant-Man'];
var favoriteMoviesArray = [];

var movieURL = 'http://www.omdbapi.com/?apikey=16ec6f98&t=';
var favoritesListEl = $('#favorite-movies-list');
var posterURL = '';

renderFavoriteMovies();

function renderFavoriteMovies() {
  favoritesListEl.empty();
  var favoriteMoviesStorage = JSON.parse(localStorage.getItem("favoriteMoviesStorage"));
  if (favoriteMoviesStorage !== null) {
    favoriteMoviesArray = favoriteMoviesStorage;
  }
  for (var i = 0; i < favoriteMoviesArray.length; i++) {
    var currentMovieTitle = favoriteMoviesArray[i].Title;
    var currentPosterURL = favoriteMoviesArray[i].moviePosterURL;
    console.log(i+": "+currentMovieTitle+" "+currentPosterURL);
    favoritesListEl.append('<div class="row" data-index="'+i+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s2"><img src="'+currentPosterURL+'"></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s8 center"><h4>'+currentMovieTitle+'</h4></div>');
    $('*[data-index="'+i+'"]').append('<div class="col s2 right"><a class="remove-favorite-btn waves-effect waves-light btn right"><i class="material-icons left">delete</i>Remove</a></div>');
  };
}


favoritesListEl.on("click", ".remove-favorite-btn", function () {
  console.log($(this).parent().parent().attr("data-index"));
  var index = $(this).parent().parent().attr("data-index")
  favoriteMoviesArray.splice(index, 1);
  localStorage.setItem("favoriteMoviesStorage", JSON.stringify(favoriteMoviesArray));
  renderFavoriteMovies();
})

for (var i = 0; i < favoriteMoviesArray.length; i++){
  var currentMovieTitle = favoriteMoviesArray[i].Title.replace(/\s+/g, '-').toLowerCase();
  console.log(movieURL+currentMovieTitle)
  console.log([i]);
  fetch(movieURL+currentMovieTitle)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        console.log(data);
          // var currentMovieTitle = favoriteMoviesArray[i].Title;
          // console.log(currentMovieTitle);
          // posterURL = data.Poster;
          console.log(data.Poster);
//           // favoriteMoviesArray[i].moviePosterURL = posterURL;
//           console.log(favoriteMoviesArray.length);
//           console.log([i]);
//           console.log(favoriteMoviesArray[i]);
//           // console.log('Array: ' +favoriteMoviesArray[i]);
//           // favoriteMoviesArray[i].moviePosterURL = data.Poster;
//           // $('#movie-'+[i].toString()).prepend('<div class="col s4"><img src='+posterURL+'></div>');
      });
}

// for (var i =0; i<favoriteMoviesArray.length; i++) {
//   console.log(favoriteMoviesArray[i]);
// }


// Test Prompt to get movie input and add it to favories array
var movieEntered = prompt('Enter movie');
addFavoriteMovie(movieEntered);

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

