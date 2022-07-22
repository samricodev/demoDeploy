const forElement = document.getElementById('saveTransaction');

forElement.addEventListener('submit', (event) => {
    event.preventDefault();
    let des = document.getElementById('transactionDescription').value;
    let price = document.getElementById('transactionPrice').value;
    let transaction = {
        transDes : des,
        transPrice : price
    }
    let transJson = JSON.stringify(transaction);
    //mandar del frontend al backend
    fetch('http://localhost:3000/transactions', {
        method : 'Post',
        body : transJson
    })
    //console.log(transJson);
});

fetch('http://localhost:3000/transactions').then(x => x.json()).then(console.log)