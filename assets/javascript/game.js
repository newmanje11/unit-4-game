// set needed variable for the game 

var wins = 0;
var losses = 0;
var score = 0;

// Make it so that there is a random number 19-20

// $(document).ready(function () {
//     var randomNum = Math.floor((Math.random() * 120) + 19);
//     console.log(randomNum)
//     // Make it so that the random number display in .gamescore
//     $(".gametotal").html(randomNum)

// });
//     var imgNum = Math.floor((Math.random() * 12) + 1);
//     console.log(imgNum);
//     var imgs = $(".crystal")
//     // each img has a a value with it
//     $(".crystal").each(function () { 
//         imgs.attr(val ,  imgNum;




//     });

$(document).ready(function () {
    // Generates random number to guess
    var randomNum = Math.floor((Math.random() * 120) + 19);

    // Display random number
    $(".gametotal").html(randomNum);

    //Generate random number for each crystal
    var num1 = Math.floor((Math.random() * 12) + 1);
    var num2 = Math.floor((Math.random() * 12) + 1);
    var num3 = Math.floor((Math.random() * 12) + 1);
    var num4 = Math.floor((Math.random() * 12) + 1);

    $(".gamescore").html("Wins : " + wins + "<br>Losses : " + losses)

    function reset() {
        randomNUm = Math.floor((Math.random() * 120) + 19);
        console.log(randomNum)
        $(".gametotal").text(randomNum);
        num1 = Math.floor((Math.random() * 12) + 1);
        num2 = Math.floor((Math.random() * 12) + 1);
        num3 = Math.floor((Math.random() * 12) + 1);
        num4 = Math.floor((Math.random() * 12) + 1);
        score = 0;
        $(".yourscore").text(score);
    }

    

    // Display wins
    function win() {
        alert("Congrats! You won!");
        wins++;
        
        reset();
    }
    // Display losses
    function loser() {
        alert("Sorry! You lose!");
        losses++;
        
        reset();
    }
    // Clicking crystals
    $(".red").on("click", function () {
        score = score + num1;
        
        $(".yourscore").text(score);
        //Win & lose conditions
        if (score === randomNum) {
            win();
            wins++;
        }
        else if (score > randomNum) {
            loser();
            losses++;
        }

        
    })
    $(".blue").on("click", function () {
        score = score + num2;
        
        $(".yourscore").text(score);
        if (score === randomNum) {
            win();
            wins++;
        }
        else if (score > randomNum) {
            loser();
            losses++;
        }
    })
    $(".yellow").on("click", function () {
        score = score + num3;
        
        $(".yourscore").text(score);

        if (score === randomNum) {
            win();
            wins++;
        }
        else if (score > randomNum) {
            loser();
            losses++;
        }
    })
    $(".green").on("click", function () {
        score = score + num4;
        
        $(".yourscore").text(score);

        if (score === randomNum) {
            win();
            wins++;
        }
        else if (score > randomNum) {
            loser();
            losses++;
        }
        
        
    });
});








