let amountElement = document.querySelector(".js-PLN");
let toElement = document.querySelector(".js-toAmount");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");
let exchangeRateElement = document.querySelector(".js-exchangeRate");


let euro = 4.72;
let gbp = 5.28;
let usd = 4.64;


amountElement.addEventListener("input", () => {
    console.log('kwota została zmieniona.');
});

formElement.addEventListener("reset", () => {
    console.log('kwota została zmieniona.');
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = amountElement.value;
    let to = toElement.value;

    switch (to) {
        
        case "euro":
            result = amount / euro;
            exchangeRateElement.innerText = euro;
            break;
        case "gbp":
            result = amount / gbp;
            exchangeRateElement.innerText = gbp;
            break;
        case "usd":
            result = amount / usd;
            exchangeRateElement.innerText = usd;
            break;
    }
    console.log(amount, to);
    resultElement.innerText = result.toFixed(2);
});