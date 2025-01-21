const buttons = document.querySelectorAll("button[data-choice]")
const resultContainer = document.getElementById("result")

const choices = ["stone", "leaf", "scissors"]

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "A tie!"
    } else if (
        (playerChoice === "stone" && computerChoice === "scissors") ||
        (playerChoice === "leaf" && computerChoice === "stone") ||
        (playerChoice === "scissors" && computerChoice === "leaf")
    ) {
        return "You win!"
    } else {
        return "The computer wins!"
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice()
    const winner = determineWinner(playerChoice, computerChoice)

    resultContainer.innerHTML = `
        <p>You've made your choice: ${playerChoice}</p>
        <p>The computer has chosen: ${computerChoice}</p><br>
        <p>${winner}</p>
    `
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerChoice = button.getAttribute("data-choice")
        playGame(playerChoice)
    })
})