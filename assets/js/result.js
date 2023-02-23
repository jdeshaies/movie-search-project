//grabbing the search term from local storage
var userInput = localStorage.getItem("searchInput");
//runs the playVideo function which takes users input and displays movie trailer
function playVideo(movieTitle) {
  //replaces all spaces in the search term with "+" so that the API can use the term in its URL
  var userInputQuerySearch = movieTitle.replaceAll(" ", "+");

  //takes the now mutated userInput and adds "official+trailer" to the end in order to grab a movie trailer
  var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInputQuerySearch}+official+trailer`;

  //using jquery to get the data needed from the API's response, and appending it to the iframe player to display on the page
  $.get(requestUrl, function (data) {
    var videoId = data.items[0].id.videoId;
    var video = $("#youtubeVideo");
    video.attr("src", `https://www.youtube.com/embed/${videoId}`);
    $("#video").append(video);
  });
}

    var userInputel = document.getElementById('input-test');
    console.log(userInputel)
    //userInputel.setAttribute('type', 'text');
    //userInputel.setAttribute('id', 'userInput');
    //document.body.appendChild(userInputel);
    
    //var userInputel = document.getElementById('userInput').value;
    var url = 'http://www.omdbapi.com/?apikey=16ec6f98&t='+userInput;
    
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(JSON.stringify(data));
        var title = document.createElement('div');
        localStorage.setItem("movieTitle", data.Title);
        title.innerHTML = 'Title: ' + data.Title;
        userInputel.appendChild(title);
        
        var year = document.createElement('div');
        year.innerHTML = 'Year: ' + data.Year;
        userInputel.appendChild(year);
        
        var rating = document.createElement('div');
        rating.innerHTML = 'Rating: ' + data.Rated;
        userInputel.appendChild(rating);
      });
    
;

//return Jake's movie title variable to be used as search term for youtube API, having him declare and call his function before playVideo is called
playVideo(userInput);

var homeBtn = $("#searchAgain");
homeBtn.click(function () {
  window.location.href = "./index.html";
});

// Variables for favorites page
var favoriteMoviesArray = [];
var movieURL = 'http://www.omdbapi.com/?apikey=16ec6f98&t=';

//Adds event listener to add button
var addButton = document.getElementById('add-btn');
addButton.addEventListener('click', function() {
  var favoriteMoviesStorage = JSON.parse(localStorage.getItem("favoriteMoviesStorage"));
  if (favoriteMoviesStorage !== null) {
    favoriteMoviesArray = favoriteMoviesStorage;
  }
  var newMovie = {
    Title: localStorage.getItem("movieTitle"),
    moviePosterURL: ""
  }
  var movieName = newMovie.Title.replace(/\s+/g, '-').toLowerCase();
  fetch(movieURL+movieName)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
        newMovie.moviePosterURL = data.Poster;
        favoriteMoviesArray.push(newMovie);
        localStorage.setItem("favoriteMoviesStorage", JSON.stringify(favoriteMoviesArray));
      })
});