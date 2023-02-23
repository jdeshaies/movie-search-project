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

  }
});

// Brings user to favorites page when button clicked on homepage
var favoritesPageBtn = $("#favorites-btn");
favoritesPageBtn.click(function () {
  window.location.href = "./favorites.html";
});



