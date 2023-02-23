

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



