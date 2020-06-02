var secret = Math.floor(Math.random()*10)+1;

function askQuestion(){
    var guess = parseInt(prompt("Can you guess our secret number?(1-10)"));
    checkAnswer(guess);
}

function checkAnswer (guess){
     if(guess > secret){
            alert("Awww, too high. Try again");
            askQuestion();
        } else if(guess < secret){
            alert("Aww, too low. Try again");
            askQuestion();
        } else if(guess === secret){
         document.getElementById("output").innerHTML = "Yay! Congratulations!" + " " + guess + " is the secret number!";
        }else{
            alert("Please guess a number between 1 and 10");
            askQuestion();
        }
        
    }

 
