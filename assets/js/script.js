var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInputQuerySearch}`;
var userInput = $("#").val();
var userInputQuerySearch = userInput.replaceAll(" ", "+");

function getApi() {
  $.get(requestUrl, function (data) {
    var videoId = data.items[0].id.videoId;
    console.log(data);
    console.log(data.items[0].id.videoId);
  });
}

function playVideo(videoId) {
  var video = $("#youtubeVideo");
  video.attr("src", "https://www.youtube.com/embed/zyYgDtY2AMY");

  $("#video").append(video);
}
//${data.items[0.id]}
//items[0].id.videoId

var searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function () {
  var searchBar = document.getElementById("searchBar");
  var searchTerm = searchBar.value;
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
      playVideo();
    }
  });
  xhr.send();
});

// Variables for favorites page
var favoriteMovies = ["Spider-Man", "Iron Man", "Ant-Man"];
var movieURL = "http://www.omdbapi.com/?apikey=16ec6f98&t=";
var favoritesListEl = $("#favorite-movies-list");
var posterURL = "";

for (var i = 0; i < favoriteMovies.length; i++) {
  fetch(movieURL + favoriteMovies[i])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var currentMovieTitle = favoritesListEl[i];
      console.log(currentMovieTitle);
      posterURL = data.Poster;
    });
}

for (var i = 0; i < favoriteMovies.length; i++) {
  var currentMovieTitle = favoriteMovies[i];
  favoritesListEl.append(
    '<div id="movie-' + [i].toString() + '" class="row"></div>'
  );
  // favoritesListEl.append('<div id="'+favoriteMovies[i].replace(/\s+/g, '')+'" class="row">'+currentMovieTitle+'</div>');
}
