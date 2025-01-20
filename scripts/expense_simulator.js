const balanceContainer = document.getElementById("balance")
const descriptionInput = document.getElementById("description")
const amountInput = document.getElementById("amount")
const typeSelect = document.getElementById("type")
const addTransactionButton = document.getElementById("add-transaction")
const transactionList = document.getElementById("transaction-list")

let balance = 0
let transactions = []

function updateBalance() {
    balanceContainer.textContent = `${balance.toFixed(2)}$`
}

function addTransaction(description, amount, type) {
    const transaction = {
        id: Date.now(),
        description,
        amount: parseFloat(amount),
        type
    }

    transactions.push(transaction)

    if (type === "income") {
        balance += transaction.amount;
    } else if (type === "expense") {
        balance -= transaction.amount;
    }

    updateBalance()
    displayTransactions()
}

function displayTransactions() {
    transactionList.innerHTML = ""

    transactions.forEach(transaction => {
        const li = document.createElement("li")
        li.classList.add(transaction.type === "income" ? "income" : "expense")
        li.innerHTML = `
            <span>${transaction.description} - ${transaction.amount.toFixed(2)}$</span>
            <button onClick="deleteTransaction(${transaction.id})">❌</button>
        `
        transactionList.appendChild(li)
    })
}

function deleteTransaction(id) {
    const transaction = transactions.find(t => t.id === id)

    if (transaction.type === "income") {
        balance -= transaction.amount;
    } else if (transaction.type === "expense") {
        balance += transaction.amount;
    }

    transactions = transactions.filter(t => t.id !== id)

    updateBalance()
    displayTransactions()
}

addTransactionButton.addEventListener("click", () => {
    const description = descriptionInput.value.trim()
    const amount = amountInput.value
    const type = typeSelect.value

    if (description === "" || amount === "" || isNaN(amount) || parseFloat(amount) <= 0) {
        alert("Please enter a valid description and a positive amount.")
    } else {
        addTransaction(description, amount, type)

        descriptionInput.value = ""
        amountInput.value = ""
        typeSelect.value = "income"
    }
})

updateBalance()