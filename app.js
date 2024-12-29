let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');
let userScoreP = document.querySelector('#userscore');
let compScoreP = document.querySelector('#computerscore');

const gencompChoice = () => {
    const option  = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return option [random];
}

const drawGame= () =>{
    msg.innerText = "It's a tie";
    msg.style.backgroundColor = "black"
}

const showWinner = (userWins) => {
    if(userWins){
        userScore++;
        userScoreP.innerText = userScore;
        msg.innerText = "User Wins";
        msg.style.backgroundColor= 'green';
        
    } 
    else{
        compScore++;
        compScoreP.innerText = compScore;
        msg.innerText = "You Lose";
        msg.style.backgroundColor = 'red';
       
    }
}

const gamePlay = (userChoice) => {
    console.log("User Choice is ",userChoice);

    const compChoice = gencompChoice();
    console.log("Computer Choice is ",compChoice);

    if (userChoice === compChoice) {
        drawGame();
    }
    else{
        let userWins = true;
        if(userChoice === "rock"){
            userWins = compChoice === "paper" ? false : true;
            }
        else if(userChoice === "paper"){
            userWins = compChoice === "scissors" ? false : true;
            }
        else{
           userWins = compChoice === "rock" ? false : true;
           }
        showWinner(userWins);
    
    }
};

choices.forEach(( choice) => {
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        gamePlay(userChoice);
    });
});
