//grabbing the search term from local storage
var userInput = localStorage.getItem("searchInput");
//runs the playVideo function which takes users input and displays movie trailer
function playVideo() {
  //replaces all spaces in the search term with "+" so that the API can use the term in its URL
  var userInputQuerySearch = userInput.replaceAll(" ", "+");

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
playVideo();
