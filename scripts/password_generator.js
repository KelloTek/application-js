const passwordField = document.getElementById("password")
const lengthInput = document.getElementById("length")
const includeLowercase = document.getElementById("include-lowercase")
const includeUppercase = document.getElementById("include-uppercase")
const includeNumbers = document.getElementById("include-numbers")
const includeSymbols = document.getElementById("include-symbols")
const generateButton = document.getElementById("generate")

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersChars = "0123456789"
const symbolsChars = "!@#$%^&*()_+[]{}|;:,.<>?/"

function generatePassword() {
    let availableChars = ""
    if(includeLowercase.checked) availableChars += lowercaseChars
    if(includeUppercase.checked) availableChars += uppercaseChars
    if(includeNumbers.checked) availableChars += numbersChars
    if(includeSymbols.checked) availableChars += symbolsChars

    const passwordLength = parseInt(lengthInput.value, 10)

    if(availableChars === "") {
        passwordField.value = "Select at least one criterion"
    } else {
        let password = ""
        for(let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * availableChars.length)
            password += availableChars[randomIndex]
        }

        passwordField.value = password
    }
}

generateButton.addEventListener("click", generatePassword)