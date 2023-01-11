document.querySelector('#form').onsubmit = () =>{
    const base = document.querySelector('#currency-from').value;
    fetch(`https://api.exchangerate.host/latest?/source=ecb&base=${base}`)
        .then((response) => response.json())
        .then((data) => {
            const amount = document.querySelector("#amount").value;
            const currencyTo = document.querySelector("#currency-to").value;
            const rate = data.rates[currencyTo];
            const display =  document.querySelector(".display-result")

            function convert(){
                return amount * rate;
            }
            display.classList.remove("d-none");
            display.innerHTML = `${amount} ${base.toUpperCase()} equal to ${currencyTo} ${convert().toFixed(2)}`;
           
           
        })
        .catch((error) => {
            console.log("Error: ", error);
        });
        return false;
}


