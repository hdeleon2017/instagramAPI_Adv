// YOUR CODE GOES HERE
var clientID = "b3aca93577762a361363318839281b22";
var userInput = "";

$(document).ready(function() {
    $("#search-btn").click(function() {
        userInput = $("#search-query").val();
        searchFlickr(clientID, userInput, 10, function(photos) {
            $('#search-results').empty('#search-results');
            for (var i = 0; i < photos.photo.length; i++)
                $('#search-results').append('<img src=' + photos.photo[i].url_m + '>');
        });
    });
    $("#reset-btn").click(function() {
        $('#search-results').empty('#search-results');
    });
});