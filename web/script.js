const formElement = document.getElementById("saveTransaction");

formElement.addEventListener("submit", (e) => {
    e.preventDefault();
    let transactionrDescription = document.getElementById("transactionDescription").value;
    let transactionPrice =document.getElementById("transactionPrice").value;
    let transaction = {transactionrDescription: transactionrDescription,transactionPrice: transactionPrice };
    let transactionJson = JSON.stringify(transaction);
    console.log(transactionJson);
});

