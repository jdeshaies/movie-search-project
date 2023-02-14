















































// var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInput}`;
// var userInput = grab input from the search bar of user





// $.get(requestUrl)
//
$.get("https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=ferrari%official%trailer",function(data){
   console.log(data) 
   console.log(data.items[0].id.videoId)
})



//items[0].id.videoId
// in order to support multi-word titles: create an array of user input, and use split() to find spaces, and replace any spaces in search with %