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