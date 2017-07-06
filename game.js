
$(document).ready(function() {



	var dogs =["goldendoodle", "pitbull","lab","poodle"];
	console.log(dogs); 
	var currentWord;
	var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];
	letters = letters[0,1,2,3].split('');
	var wins = [];
	var lettersGuessed =[];
	var guessesRemaining = 9;
	var wrongLetters = [];


	var underscores = [];

	
	var initialPress = true;




	function startGame() {
		currentWord = dogs[0,1,2,3].split('');
		console.log(currentWord)
		// for(var i = 0; i < dogs.length; i++){
  //       	underscores.push("_ ");   
  //   	}
	  	$("#currentWord").hide();

	  	for (var i = 0; i < currentWord.length; i++) {
			$('body').append('<span id="span'+ i +'" />')
			console.log(currentWord[i]);
			document.getElementById("span"+i).innerHTML = "_ ";
		}
  		document.getElementById("currentWord").innerHTML = currentWord;
  		dogs = dogs.splice(0);
	}

	function guessLetter(letter) {
		console.log(letter)
		console.log(currentWord)
		currentWord.reduce(function(a,e,i){
			
			if(e===letter){
				console.log(e)
				document.getElementById("span"+i).innerHTML = letter;
			}
		})
	}

	$("#guesser").keypress(function(e){
		if(e.which === 13) {
			var letter = $("#guesser")[0].value;
			guessLetter(letter)
		}
	})



	if(initialPress == true){
	document.getElementById("initialOutput").innerHTML = "Press any key to get started!";

    }
    document.onkeyup = function(initialButton){
    	if(initialPress == true){
    		startGame()

          document.getElementById("initialOutput").innerHTML = "Let's Begin!";
       
          initialPress = false;
  		}
	}  
})

	 //   var remainingLetters = word.length;

  // while(remainingLetters>0){
  //   dogs.join(" ");
  // }




    

        



	


