


function getVideoId() {
  var userInput = $("#searchBar").val();
  console.log(userInput)
  var userInputQuerySearch = userInput.replaceAll(" ", "+");
  var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInputQuerySearch}+official+trailer`;
 
  $.get(requestUrl, function (data) {
    var videoId = data.items[0].id.videoId
    var video = $("#youtubeVideo");
    var videoLink = video.attr("src", `https://www.youtube.com/embed/${videoId}`);
    console.log(videoId)
    $("#video").append(video);
  // return data.items[0].id.videoId;
  });
}

// function playVideo(videoId) {
//   var video = $("#youtubeVideo");
//   console.log(videoId)
//   video.attr("src", `https://www.youtube.com/embed/${videoId}`);
//   $("#video").append(video);
// }
//${data.items[0.id]}
//items[0].id.videoId


var searchButton = document.getElementById("searchButton");


searchButton.addEventListener("click", function () {
  //need to link to results.html
  // console.log(userInput)
  var searchBar = document.getElementById("searchBar");
  var searchTerm = searchBar.value;
  // var url = "http://www.omdbapi.com/?t=" + searchTerm + "&apikey=16ec6f98";
  // var xhr = new XMLHttpRequest();
  // xhr.open("GET", url);
  // xhr.addEventListener("load", function () {
  //   var response = JSON.parse(xhr.response);
  //   var results = response.Search;
  //   var resultsContainer = document.createElement("div");
  //   resultsContainer.setAttribute("id", "resultsContainer");
  //   document.body.appendChild(resultsContainer);
  //   for (var i = 0; i < results.length; i++) {
  //     var result = results[i];
  //     var resultContainer = document.createElement("div");
  //     resultContainer.setAttribute("class", "resultContainer");
  //     resultContainer.innerHTML = result.Title;
  //     resultsContainer.appendChild(resultContainer);
    
    // }
  // });
  // xhr.send();
  getVideoId();
  // playVideo(videoId);
});


// Variables for favorites page

// var favoriteMovies = ['Spider-Man','Iron Man','Ant-Man'];
var favoriteMoviesArray = [
  {
    Title: "Spider-Man",
    moviePosterURL: "https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },
  {
    Title: "Iron Man",
    moviePosterURL: "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Ant-Man",
    moviePosterURL: "https://m.media-amazon.com/images/M/MV5BMjM2NTQ5Mzc2M15BMl5BanBnXkFtZTgwNTcxMDI2NTE@._V1_SX300.jpg",
  }
];


var movieURL = 'http://www.omdbapi.com/?apikey=16ec6f98&t=';
var favoritesListEl = $('#favorite-movies-list');
var posterURL = '';

for (var i = 0; i < favoriteMoviesArray.length; i++) {
   var currentMovieTitle = favoriteMoviesArray[i].Title;
   var currentPosterURL = favoriteMoviesArray[i].moviePosterURL
   favoritesListEl.append('<div id="movie-'+[i].toString()+'" class="row"></div>');
   $('#movie-'+[i].toString()).append('<div class="col s2"><img src="'+currentPosterURL+'"></div>');
   console.log('Current URL: ' + currentPosterURL);
   $('#movie-'+[i].toString()).append('<div class="col s8 center"><h4>'+currentMovieTitle+'</h4></div>');
   $('#movie-'+[i].toString()).append('<div class="col s2 right"><a class="waves-effect waves-light btn right"><i class="material-icons left">delete</i>Remove</a></div>');
};


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


