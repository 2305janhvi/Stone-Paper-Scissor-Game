let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () => {
    // rockpaperscissors
    const options = ["rock","paper","scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const drawGame = () => {
    console.log("game was draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor  = "#081b31";
}

const ShowWinner = (userWin, userChoice, compchoice) => {
    if(userWin) {
        userscore++;
        userscorePara.innerText = userscore;
        console.log("You win");
        // msg.innerText = `You Win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor  = "green";
    }else {
        compscore++;
        compscorePara.innerText = compscore;
        console.log("You Lose");
        msg.innerText = `You Lose!Your ${compchoice} beats ${userChoice}`;
        msg.style.backgroundColor  = "red";
    }
}

const playGame = (userChoice) => {
    console.log("user choice = ",userChoice);
    // generate comp choice
    const compchoice = genCompChoice();
    console.log("comp choice = ",compchoice);

    if(userChoice === compchoice) {
        // 
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissor,paper
        userWin = compchoice === "paper" ? false : true;
        }else if(userChoice === "paper") {
        //rock,scissors
        userWin = compchoice === "scissor" ? false : true;
        }else {
            // rock,paper
            userWin = compchoice === "rock" ? false : true;
        }
        ShowWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})