
// var requestUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=ferrari%official%trailer';



// function getApi(requestUrl) {
//   fetch(requestUrl)
// //     ,{
// //     headers:{
// //         "Access-Control-Allow-Origin": "*"
// //     }
// //   })
//     .then(function (response) {
//       console.log(response);
    
//       return response.json();

//   }).then(function (data) {
//     console.log(data);

//     var video = `<iframe width="420" height="315" src="https://www.youtube.com/embed/zyYgDtY2AMY"></iframe>`

// $("#video").append(video)
  
//   })
// }

// getApi(requestUrl);














































// var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInput}`;
// var userInput = $("#").val() grab input from the search bar of user
// var userInputQuerySearch = userInput.replaceAll(' ', '+')







// $.get(requestUrl)
// function getApi()
$.get(
  "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=ferrari%official%trailer",
  function (data) {
    var videoId = data.items[0].id.videoId;
    console.log(data);
    console.log(data.items[0].id.videoId);
  }
);
// //need to pass videoId to this function
// function playVideo(){
    var video = `<iframe width="600" height="400" src="https://www.youtube.com/embed/zyYgDtY2AMY"></iframe>`

    $("#video").append(video)
// }
//${data.items[0.id]}
//items[0].id.videoId
// in order to support multi-word titles: create an array of user input, and use split() to find spaces, and replace any spaces in search with %









var searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function() {
  var searchBar = document.getElementById('searchBar');
  var searchTerm = searchBar.value;
  var url = 'http://www.omdbapi.com/?t=' + searchTerm + '&apikey=16ec6f98';
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function() {
    var response = JSON.parse(xhr.response);
    var results = response.Search;
    var resultsContainer = document.createElement('div');
    resultsContainer.setAttribute('id', 'resultsContainer');
    document.body.appendChild(resultsContainer);
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var resultContainer = document.createElement('div');
      resultContainer.setAttribute('class', 'resultContainer');
      resultContainer.innerHTML = result.Title;
      resultsContainer.appendChild(resultContainer);
    }
  });
  xhr.send();
});


