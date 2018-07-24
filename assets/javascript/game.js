// set needed variable for the game 

var wins = 0;
var losses = 0;
var score = 0;

// Make it so that there is a random number 19-20

$(document).ready(function () {
    var randomNum = Math.floor((Math.random() * 120) + 19);
    console.log(randomNum)
    // Make it so that the random number display in .gamescore
    $(".gametotal").html(randomNum)




    // then so that number is assigned for each img
    for (i = 0; i < 4; i++) {
        // make it so that random number 1-12 is selected

        var imgNum = Math.floor((Math.random() * 12) + 1);

        console.log(imgNum);

        
        // $(".crystal-image").append(im);

    }



});


         // make it display after on is clicked on
        // $("crystal-image").click(function() {
        //     $( "crystal-image" ).append(imgNum);
        //   });










    // then so that number is assigned for each img

    // if image = score win

    // if image score > score lose. 
