function calculate() {

    const interestDivider = 100;

    const totalAmount = document.getElementById("total-amount");
    const amountInput = document.getElementById("amount");
    const interestRateInput = document.getElementById("interestRate");
    const yearsInput = document.getElementById("years")

    let amount = Number(amountInput.value);
    let interestRate = Number(interestRateInput.value / interestDivider);
    let years = Number(yearsInput.value);

    if(amount < 0)
        amount = 0;

    if(interestRate < 0)
        interestRate = 0;

    if(years < 0)
        years = 0;


    const result = amount * Math.pow((1 + interestRate / 1), 1 * years);

    totalAmount.textContent = result.toLocaleString ("en-US", {style: "currency", currency: "USD"});
}