const transactionUl = document.querySelector(#transactions')

const dummyTransactions = [
    { id: 1, name: 'Bolo', amount: -20},
    { id: 2, name: 'Salário', amount: 300},
    { id: 3, name: 'Torta de frango', amount: -10},
    { id: 4, name: 'Violão', amount: 150}
]

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const amountWhitoutOperator = Math.abs(transaction.amount)
    const li = document.createElement('li')

    li.classList.add(CSSClass)
    li.innerHTML = `
    ${transaction.name} <span>${operator} R$ ${amountWhitoutOperator}</span><button class="delete-btn">x</button>
    `
    console.log(li)



}

addTransactionIntoDOM(dummyTransactions[0])