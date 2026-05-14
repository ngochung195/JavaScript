document.getElementById('converterForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let amount = document.getElementById('amount').value;
    let from = document.getElementById('fromCurrency').value;
    let to = document.getElementById('toCurrency').value;
    let result = 0;

    const rate = 26348.01;

    if (from === "VND" && to === "USD") {
        result = amount / rate;
    } else if (from === "USD" && to === "VND") {
        result = amount * rate;
    } else {
        result = amount;
    }

    let currency = (to === "USD") ? "USD" : "VND";
    let resultElement = document.getElementById('result');

    resultElement.innerText = `Result: ${result.toLocaleString()} ${currency}`;
    resultElement.style.color = "blue";
});