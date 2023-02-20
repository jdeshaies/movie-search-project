
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


