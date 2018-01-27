$( document ).ready(function() {

	//watch for the STATE of total score
    
    //declare a variable for storing the target number, which is a randomly generated
    //number between 18-120. The formula is (math.random()(max-min+1) + min)
    //hence, (math.random()(120-18+1) + 18)
    var targetNum = Math.floor(Math.random() * 103 + 18);

    //declare variables for each gemstone in the same manner

    var emeraldValue = Math.floor(Math.random() * 12 + 1);

   	var rubyValue = Math.floor(Math.random() * 12 + 1);

   	var topazValue = Math.floor(Math.random() * 12 +1);

   	var sapphireValue = Math.floor(Math.random() * 12 +1);

    //initialize the win and loss counters to zero

    var wins = 0;

    var losses = 0;

    //create a variable that stores the total score. The total score accumulates as the user clicks on the gems. For example,
    //if the ruby is randomly set to a value of 2 and the topaz is randomly set to a value of 6 in one game, 
    //and the user clicks on the ruby and the topaz in succession, the total score should be displayed first as 2, and then
    //as 8. 

    //initialize the total score to be zero

    var totalScore = 0; //increase the score +=

    //create a function that resets the game when finished. This function is global and will be called as needed

    function reset() {

      //generate a new target number with the RNG

      targetNum = Math.floor(Math.random() *103 + 18);

      //tack it onto the divbox

      $(".rngBox").text( targetNum );

      //reset every gemstone's value

      rubyValue = Math.floor(Math.random() * 12 + 1);

      emeraldValue = Math.floor(Math.random() * 12 + 1);

      sapphireValue = Math.floor(Math.random() * 12 + 1);

      topazValue = Math.floor(Math.random() * 12 + 1);

      //reset the total score counter

      totalScore = 0;

      //tack it onto the divbox

      $( ".totalScoreBox" ).text( totalScore );

      } 

      //make a function for if the player wins
      function youWin() {

        alert("You win!");
        wins++;
        $( ".winBox" ).text( wins );

        //notice how we can call the reset function to do the rest without re-writing code! 
        reset();
      }

        function youLose() {

        alert("You lose!");
        losses++;
        $( ".lossBox" ).text( losses );
        reset();
      }

      //this code will execute if the game is in play, i.e. as long as the 
      //target number is greater than the total score  

    if (targetNum > totalScore) {

    	//display everything in the correct divbox

    	$( ".rngBox" ).text( targetNum );

    	$( ".totalScoreBox" ).text( totalScore );

    	$( ".lossBox" ).text( losses );

    	$( ".winBox" ).text( wins );



    	//create an onclick function for each gem

        $( ".rubyDiv" ).on('click', function(){


            // the total score accumulates with ruby +=. This is true for all gems
            totalScore = totalScore + rubyValue;
            $( ".totalScoreBox" ).text(totalScore);
            //if the total score and target number match, the player wins, and the 
            //youWin function is called
            if (totalScore === targetNum){
                youWin();
            }
            //if the totalScore goes over the value of the target number,
            //the youLose function executes
            else if (totalScore > targetNum){
                youLose();
            }
        })

         $( ".emeraldDiv" ).on('click', function(){

            totalScore = totalScore + emeraldValue;
            $( ".totalScoreBox" ).text(totalScore);
            if (totalScore === targetNum){
                youWin();
            }
            else if (totalScore > targetNum){
                youLose();
            }
        })

          $( ".sapphireDiv" ).on('click', function(){

            totalScore = totalScore + sapphireValue;
            $( ".totalScoreBox" ).text(totalScore);
            if (totalScore === targetNum){
                youWin();
            }
            else if (totalScore > targetNum){
                youLose();
            }
        })

           $( ".topazDiv" ).on('click', function(){

            totalScore = totalScore + topazValue;
            $( ".totalScoreBox" ).text(totalScore);
            if (totalScore === targetNum){
                youWin();
            }
            else if (totalScore > targetNum){
                youLose();
            }
        })

    }
    else if (targetNum === totalScore) {
        youWin();
    }
    else if (targetNum < totalScore) {
        youLose();
    }

});