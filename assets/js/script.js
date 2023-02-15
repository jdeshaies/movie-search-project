
var requestUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=ferrari%official%trailer';



function getApi(requestUrl) {
  fetch(requestUrl)
//     ,{
//     headers:{
//         "Access-Control-Allow-Origin": "*"
//     }
//   })
    .then(function (response) {
      console.log(response);
    
      return response.json();

  }).then(function (data) {
    console.log(data);

    var video = `<iframe width="420" height="315" src="https://www.youtube.com/embed/zyYgDtY2AMY"></iframe>`

$("#video").append(video)
  
  })
}

getApi(requestUrl);














































// var requestUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBZWqlEr2JTKjchBOxdTr5oH14E9telw2k&type=video&q=${userInput}`;
// var userInput = grab input from the search bar of user

// .replace with regex
// var userInputString = ""
// userInput.push(userInputString)
// var userInputStringSplit = userInputString.split(" ");
//if (userInputStringSplit.length > 1){
    // for (var i = 0; i < userInputStringSplit.length; i++) {
    //   userInputStringSplit[i] = userInputStringSplit[i] + "%";
    // }
    // maybe change variable name of userInputStringSplit and userInput. Need to decide which var to 
    //use in HTTP request
    //} else {userInputStringSplit
//}

$.get(requestUrl)
function getApi()
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
    var video = `<iframe width="420" height="315" src="https://www.youtube.com/embed/zyYgDtY2AMY"></iframe>`

    $("#video").append(video)
// }
//${data.items[0.id]}
//items[0].id.videoId
// in order to support multi-word titles: create an array of user input, and use split() to find spaces, and replace any spaces in search with %
