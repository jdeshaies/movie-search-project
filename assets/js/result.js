//grabbing the search term from local storage
var userInput = localStorage.getItem("searchInput");
var OMDBMovieTitle = localStorage.getItem("movieTitle")
//var OMDBMovieTitle = 
//runs the playVideo function which takes users input and displays movie trailer
function playVideo(OMDBMovieTitle) {
  // ensures the trailer is visible, and the movie title modal is hidden
  $("#video").css("visibility", "visible");
  $("#OMDBValidation").css("visibility", "hidden");
  //replaces all spaces in the search term with "+" so that the API can use the term in its URL
  var userInputQuerySearch = OMDBMovieTitle.replaceAll(" ", "+");

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
//pass OMDBMovieTitle to make sure youtube searches the same movie the OMDB response comes back with
playVideo(OMDBMovieTitle);

var homeBtn = $("#searchAgain");
homeBtn.click(function () {
  window.location.href = "./index.html";
});

//checks the OMDB response to see if a movie title is returned
$.get(
  `http://www.omdbapi.com/?t=${userInput}&apikey=16ec6f98`,
  function (data) {
    console.log(data.Response);
    console.log(data);
    //if no movie title is found, then a pop up modal will appear prompting the user to search again
    if (data.Response === "False") {
      console.log("No movie with that title. Please try again");
      $("#video").css("visibility", "hidden");
      $("#OMDBValidation").css("visibility", "visible");
      $("#closeOMDBValidationBtn").click(function () {
        window.location.href = "./index.html";
      });
    }
  }
);
