function exchange(amount) {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;

    const convertedAmount = calculate(amount, fromUnit, toUnit);

    document.getElementById("output").value = convertedAmount + toUnit;
}

function calculate(amount, fromUnit, toUnit) {
    const exchangeUnit = {
        cm: 100,
        inch: 39.37,
        m: 1,
        km: 0.001
    };
    
    const convertedAmount = amount * (exchangeUnit[toUnit] / exchangeUnit[fromUnit]);
    
    return convertedAmount;
}
