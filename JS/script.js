{
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", (even) => {
            even.preventDefault();

            const amountElement = document.querySelector(".js-PLN");

            const toElement = document.querySelector(".js-toAmount");

            const resultElement = document.querySelector(".js-result");
            const amount = amountElement.value;
            const to = toElement.value;

            const result = calculateResult(amount, to);

            resultElement.innerText = result.toFixed(2);
        });
    };
    
    init();

    const calculateResult = (amount, to) => {
        const euro = 4.72;
        const gbp = 5.28;
        const usd = 4.64;

        switch (to) {
            
            case "euro":
                return amount / euro;
                    
            case "gbp":
                return amount / gbp;
                           
            case "usd":
                return amount / usd;     
        }

    };
}
