var userInput = localStorage.getItem("searchInput");

function playVideo() {
    
    console.log(userInput)
    var userInputQuerySearch = userInput.replaceAll(" ", "+");
    var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInputQuerySearch}+official+trailer`;
   
    $.get(requestUrl, function (data) {
      var videoId = data.items[0].id.videoId
      var video = $("#youtubeVideo");
      var videoLink = video.attr("src", `https://www.youtube.com/embed/${videoId}`);
      console.log(videoId)
      $("#video").append(video);
        
    });
  }
  playVideo();